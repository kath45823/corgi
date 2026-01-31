import { Collapsible as BaseUICollapsible } from "@base-ui/react/collapsible";
import { cva, type VariantProps } from "cva";
import { cn } from "../../utils";
import styles from "./index.module.css";

const DropdownRootStyles = cva({
    base: styles.Collapsible,
    variants: {
        palette: {
            neutral: styles.Neutral,
            brandNeutral: styles.BrandNeutral,
        },
    },
});

type DropdownProps = React.ComponentProps<typeof BaseUICollapsible.Root> &
    VariantProps<typeof DropdownRootStyles>;

export const Dropdown = ({ palette = "neutral", ...props }: DropdownProps) => (
    <BaseUICollapsible.Root
        className={cn(DropdownRootStyles({ palette }))}
        {...props}
    >
        <BaseUICollapsible.Trigger className={styles.Trigger}>
            Menu item
        </BaseUICollapsible.Trigger>
        <BaseUICollapsible.Panel className={styles.Panel}>
            <div className={styles.Content}>
                <div>Menu item</div>
                <div>Menu item</div>
                <div>Menu item</div>
            </div>
        </BaseUICollapsible.Panel>
    </BaseUICollapsible.Root>
);

/*
export function ChevronIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
    </svg>
  );
}
*/
