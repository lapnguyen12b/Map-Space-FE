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

export type { Option, FilterDropdown, ClassName };
