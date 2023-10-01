'use client';

import { Breadcrumb } from 'flowbite-react';
import { Breadcrumb as BreadcrumbType } from 'src/types';
import { cn } from 'src/utils';
import { Text } from '.';

type BreadcrumbProps = {
  breadcrumbs: BreadcrumbType[];
  className?: string;
  classNameBreadcrumbItem?: string;
  classNameBreadcrumbItemText?: string;
};

export const DefaultBreadcrumb = ({
  breadcrumbs,
  className,
  classNameBreadcrumbItem,
  classNameBreadcrumbItemText,
}: BreadcrumbProps) => {
  const classNameMerge = cn(className);
  return (
    <Breadcrumb className={classNameMerge}>
      {breadcrumbs.map((b, index) => (
        <Breadcrumb.Item
          key={`breadcrumb-${b.name}`}
          href={index !== breadcrumbs.length - 1 ? b.href : undefined}
          icon={b.icon}
          className={cn(classNameBreadcrumbItem)}
        >
          <Text className={cn(classNameBreadcrumbItemText)}>{b.name}</Text>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
