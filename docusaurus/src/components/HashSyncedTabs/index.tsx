import React, {useEffect, useMemo, useRef, useState} from 'react';
import Tabs from '@theme/Tabs';
import {useLocation} from '@docusaurus/router';

type BaseTabsProps = React.ComponentProps<typeof Tabs>;

export type HashSyncedTabsProps = BaseTabsProps & {
  /** Amount of space to keep above the tab group when scrolling into view. */
  scrollOffset?: number;
};

const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';

function getHashValue(rawHash: string | undefined): string | null {
  if (!rawHash) {
    return null;
  }

  const hashWithoutPound = rawHash.startsWith('#') ? rawHash.slice(1) : rawHash;
  const decoded = decodeURIComponent(hashWithoutPound);

  return decoded.length > 0 ? decoded : null;
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

const HashSyncedTabs: React.FC<HashSyncedTabsProps> = ({
  children,
  scrollOffset = 120,
  defaultValue,
  onChange,
  values: providedValues,
  ...rest
}) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const tabValues = useMemo(() => {
    if (providedValues && providedValues.length > 0) {
      return providedValues.map((tab) => tab.value);
    }

    return React.Children.toArray(children)
      .map((child) => (React.isValidElement(child) ? child.props.value : undefined))
      .filter((value): value is string => typeof value === 'string');
  }, [children, providedValues]);

  const defaultFromChildren = useMemo(() => {
    const childArray = React.Children.toArray(children);
    const defaultChild = childArray.find(
      (child) => React.isValidElement(child) && child.props.default,
    );

    if (defaultChild && React.isValidElement(defaultChild)) {
      return defaultChild.props.value as string | undefined;
    }

    return undefined;
  }, [children]);

  const initialFromHash = getHashValue(location.hash);

  const [selectedValue, setSelectedValue] = useState<string | undefined>(() => {
    if (initialFromHash && tabValues.includes(initialFromHash)) {
      return initialFromHash;
    }

    if (defaultValue) {
      return defaultValue;
    }

    if (defaultFromChildren) {
      return defaultFromChildren;
    }

    return tabValues[0];
  });

  useEffect(() => {
    const hash = getHashValue(location.hash);

    if (hash && tabValues.includes(hash) && hash !== selectedValue) {
      setSelectedValue(hash);
      requestAnimationFrame(() => scrollTabsIntoView(containerRef.current, scrollOffset));
    }
  }, [location.hash, selectedValue, tabValues, scrollOffset]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);

    if (isBrowser()) {
      const {pathname, search} = window.location;
      const newUrl = `${pathname}${search}#${encodeURIComponent(value)}`;
      window.history.replaceState(undefined, '', newUrl);
      requestAnimationFrame(() => scrollTabsIntoView(containerRef.current, scrollOffset));
    }
  };

  const anchorElements = tabValues.map((value) => (
    <span
      key={value}
      id={value}
      aria-hidden="true"
      style={{
        display: 'block',
        height: 0,
        position: 'relative',
        top: `-${scrollOffset}px`,
        visibility: 'hidden',
      }}
    />
  ));

  return (
    <div ref={containerRef}>
      {anchorElements}
      <Tabs
        {...rest}
        values={providedValues}
        defaultValue={selectedValue}
        value={selectedValue}
        onChange={handleChange}
      >
        {children}
      </Tabs>
    </div>
  );
};

export default HashSyncedTabs;

function scrollTabsIntoView(element: HTMLDivElement | null, offset: number) {
  if (!isBrowser() || !element) {
    return;
  }

  const {top} = element.getBoundingClientRect();
  const targetY = top + window.scrollY - offset;

  window.scrollTo({top: targetY, behavior: SCROLL_BEHAVIOR});
}
