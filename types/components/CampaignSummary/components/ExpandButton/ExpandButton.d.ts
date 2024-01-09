import React from 'react';
interface ExpandButtonProps {
    type: string;
    title: string;
    isExpanded: boolean;
    setIsExpanded: any;
}
declare const ExpandButton: React.FC<ExpandButtonProps>;
export default ExpandButton;
