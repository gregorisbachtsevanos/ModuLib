import React, { HTMLAttributes } from 'react';
interface BlockProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
}
declare const Block: React.FC<BlockProps>;
export default Block;
