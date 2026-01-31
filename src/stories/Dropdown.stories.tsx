import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "../../lib/components/Dropdown";

const meta = {
    component: Dropdown,
    argTypes: {
        palette: {
            table: { type: { summary: "neutral | brandNeutral" } },
            options: ["neutral", "brandNeutral"],
            control: "select",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Neutral: Story = {
    args: {
        palette: "neutral",
    },
};

export const BrandNeutral: Story = {
    args: {
        palette: "brandNeutral",
    },
};
