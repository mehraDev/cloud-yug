export declare interface ListRendererProps {
    list: string[];
    component: any;
}

export const ListRenderer = ({list,component}: ListRendererProps): JSX.Element => {
   return <div>{list.map((i,j) => component(i,j))}</div>
}
const item = (name:any,key:any) => <div key={key}>{name}</div>
const list = ['Dashboard','Inventory','Billing','Orders','Messages','Statistics','Delivery','Settings'];
export const Sidenav = () => {
   
    return (<div className="team-left-column color-bg-default col-md-4 border-right d-md-flex" >
        <ListRenderer list={list} component={item}/>
    </div>)
}   



