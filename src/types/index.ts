type Option = {
  value: string;
  label: string;
};

type ClassName = {
  className?: string;
};

type FilterDropdown = ClassName & {
  displayDropdown: boolean;
  closeDropdown: (e: Event) => void;
};

type Breadcrumb = {
  name: string;
  href: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
};

export type { Breadcrumb, ClassName, FilterDropdown, Option };
