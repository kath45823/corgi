/*
const TagRootStyles = cva({
    variants: {
        size: {
            small,
            medium,
            large,
        }
        style: {
            filled: styles.Neutral,
            outline,
            brand: styles.Brand,
            brandNeutral,
        },
    },
});

type TagProps = VariantProps<typeof TagRootStyles>;
*/

export const Tag = ({ label }: { label: string }) => {
    return (
        <div className="tag-container">
            <span className="label">{label}</span>
        </div>
    );
};
