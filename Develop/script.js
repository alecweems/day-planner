$().ready(
    function () {

        // array of hours
        // var currentHouse = moment().hours();
        // loop through hours, 
        // if current hour > loop hour, add past to parent
        // if current hour < loop hour, add future to parent
        // else add present

        var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]
        var currentHour = moment().hours()

        for (var i = 0; i < hours.length; i++) {
            var id = "#hour-" + hours[i];
            var lsId = "hour-" + hours[i];
            var value = localStorage.getItem(lsId);
            if (currentHour > hours[i]) {
                $(id).parent().addClass("past")
            } else if (currentHour < hours[i]) {
                $(id).parent().addClass("future")
            } else {
                $(id).parent().addClass("present")
            };
            $(id).val(value);
        }


        $(".save").on("click", function () {
            var elemId = $(this).data("element");
            var data = $("#" + elemId).val();
            localStorage.setItem(elemId,data)
        })

    }
)