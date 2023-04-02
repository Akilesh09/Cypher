

const GridOrg = (props) => {
    let name = props.name;
    let cell_num = props.cell;
    let class_div = "cell" + cell_num
    console.log(class_div)
    let url = "http://localhost:3000/organization/" + name

    return(
        <a href={url}>
        <div class={class_div} >
            {/* <a href={url}>
                <button>
                    {name}
                </button>
            </a> */}
            {name}
        </div>
        </a>
    )
}

export default GridOrg;