import * as React from "react"

import { Data, Override } from "framer"

const data = Data({
    currentPageIndex: 0,
    currentSegment: null,
})
let totalPages = 0
export const Page: Override = props => {
    // Set the total number of pages for later
    totalPages = props.children[0].props.children.length
    return {
        // Use the currentPageIndex value to set current page
        currentPage: data.currentPageIndex,
        onChangePage(current) {
            data.currentPageIndex = current
        },
    }
}
export const ChangeDots: Override = props => {
    return {
        currentPage: data.currentPageIndex,
        numberOfPages: totalPages,
    }
}
