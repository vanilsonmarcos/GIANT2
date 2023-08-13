function getOffset(currenPage = 1, listPerPage) {
     return (currenPage -1) * [listPerPage];
    }

function emptyOrRow(rows) {
    if (!rows) {
        return []
    }
    return rows
}




export {getOffset ,emptyOrRow}