$('#country').change(function(){
    let selectedCountry = $(this).children("option:selected").val();
    if (selectedCountry === '-1') { 
        $("#city-select").text('');
    } else {
  $.ajax({
        type: "GET",
        url: `api/${selectedCountry}.json`,
        data: "",
        success: function (data) {
            let selectedCity = '<option value="-1">Please Select City</option>';
            for (let i = 0; i < data.length; i++) {
                if (data[i].city_id) {
                    selectedCity += `<option value='${data[i].city_id}'> ${data[i].city_name} </option>`; 
                }
            }
            $("#city-select").html(selectedCity);
        }
    });
    }
});
