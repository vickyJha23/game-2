const formateDate = (date) => {
    const formatDateArr = date.split("-");
    return `${formatDateArr[2]}/${formatDateArr[1]}/${formatDateArr[0]}`
}


export default formateDate