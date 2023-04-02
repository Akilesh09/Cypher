const GridOrg = (props) => {
    let cell_num = props.cell;
    let class_div = "cell" + cell_num
    console.log(class_div)

    return(
        <div class={class_div}  >{props.name}</div>
    )
}

export default GridOrg;