'use client';

import { Breadcrumb as BreadcrumbType } from 'src/types';
import { cn } from 'src/utils';

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
  return null;
  // return (
  //   <BaseBreadcrumb className={classNameMerge}>
  //     {breadcrumbs.map((b, index) => (
  //       <BaseBreadcrumb.Item
  //         key={`breadcrumb-${b.name}`}
  //         href={index !== breadcrumbs.length - 1 ? b.href : undefined}
  //         icon={b.icon}
  //         className={cn(classNameBreadcrumbItem)}
  //       >
  //         <Text className={cn(classNameBreadcrumbItemText)}>{b.name}</Text>
  //       </BaseBreadcrumb.Item>
  //     ))}
  //   </BaseBreadcrumb>
  // );
};
