export const helper = {
    ConvertDateToStr: (value) => {
        var newVal = value;
        if(value instanceof Date) {
            var day = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
            var month = (value.getMonth() + 1) < 10 ? "0" + (value.getMonth() + 1) : (value.getMonth() + 1);
            var year = value.getFullYear();
            newVal = year + "-" + month + "-" + day;
        }
        return newVal;
    },
    AddDetailRow: (gridRef, dataRow) => {
        gridRef.addrow(null, dataRow);
    },
    DeleteDetailRow: (gridRef) => {
        let selectedrowindex = gridRef.getselectedrowindex();
        let id = gridRef.getrowid(selectedrowindex);
        gridRef.deleterow(id);
    },
    ConvertDateToTime: (value) => {
        var newVal = value;
        if(value instanceof Date) {
            var hour = value.getHours() < 10 ? "0" + value.getHours() : value.getHours();
            var minute = value.getMinutes() < 10 ? "0" + value.getMinutes() : value.getMinutes();
            var designator = "";
            if(hour >= 0 && hour <= 11) {
                if(hour == 0) {
                    hour = "12";
                }
                designator = "AM";
            } else {
                if(hour != 12) {
                    hour = hour - 12;
                }
                if(hour >= 0 && hour <= 9) {
                    hour = "0" + hour;
                }
                designator = "PM";
            }
            newVal = hour + ":" + minute + " " + designator;
        }
        return newVal;
    },
    GetSelectedDataItem: (gridRef) => {
        let selectedRowIndex = gridRef.getselectedrowindex();
        let selectedRowData = gridRef.getrowdatabyid(selectedRowIndex);
        return selectedRowData;
    },
};