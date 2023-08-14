import React,{useEffect} from 'react';
import { ReactNode } from 'react';

type TitleComponentProps={
    children: ReactNode;
}
function TitleComponent({children}:TitleComponentProps) {
    return(
        <><div className="product-info">{children}</div></>
    )
    }
    function PriceComponent({children}:TitleComponentProps) {
        return(
            <><div className="product-info">{children}</div></>
        )
        }
type CompoundComponentProps={
    title: string;
    titleNode?: ReactNode;
    PriceNode?: ReactNode;
}



function CompoundComponent({title,titleNode,PriceNode}:CompoundComponentProps) {
return(
    <>
    {/* {title} */}
    {titleNode}
    {PriceNode}
    </>
)
}


CompoundComponent.Title=TitleComponent;
CompoundComponent.Price=PriceComponent;
export default CompoundComponent;