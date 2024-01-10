import React, { ReactNode } from 'react';
export declare const StyledStoryComponent: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
interface StoryComponentProps {
    children: ReactNode | ReactNode[];
}
declare const StoryComponent: React.FC<StoryComponentProps>;
export default StoryComponent;
