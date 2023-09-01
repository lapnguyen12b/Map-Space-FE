type Option = {
  value: string;
  label: string;
};

type FilterDropdown = {
  displayDropdown: boolean;
  closeDropdown: (e: Event) => void;
  className?: string;
};

export type { Option, FilterDropdown };
