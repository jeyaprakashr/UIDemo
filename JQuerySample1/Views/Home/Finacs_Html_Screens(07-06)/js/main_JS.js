          function buildHtmlTable() {
            
          var retrievedObject = JSON.parse(localStorage.getItem('myObj')); 
          // console.log("retlength(1):",retrievedObject.length ); 
          var columns = addAllColumnHeaders(retrievedObject);
          //console.log("columnlength",columns.length);
          // console.log('retrievedObject', JSON.parse(retrievedObject).length);
           for (var i = 0; i < retrievedObject.length; i++) {
           var row$ = $('<tr/>');
          // console.log(row$);
          // console.log("retrievedObject[i]",retrievedObject[i]);
           for (var colIndex = 0; colIndex < columns.length; colIndex++) {
          // console.log(columns[colIndex]);
           var cellValue = retrievedObject[i][columns[colIndex]];
           //console.log(cellValue);
          if (cellValue == null) cellValue = "";
          row$.append($('<td/>').html(cellValue));
          }
           $("#Billing_table").append(row$);

          }
          }

        function addAllColumnHeaders(retrievedObject) {
        var columnSet = [];
        var headerTr$ = $('<tr/>');
        //console.log("retlength:",retrievedObject.length );
        for (var i = 0; i < retrievedObject.length; i++) {
        var rowHash = retrievedObject[i];
        for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
        }
        }
        }
        $("#Billing_table").append(headerTr$);

        return columnSet;
        }

         //$(window).on('load', function() {
        //});
        document.addEventListener("DOMContentLoaded", function(){
        $('.preloader-background').delay(1700).fadeOut('slow');
        $("#loading").delay(1700).fadeOut();
        //$("#slide-out").sideNav(show);
        });
        
        //navbar
        $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
        onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
        }
      );

        

          $(document).ready(function()
          {
          $(".menu li").click(function()
          {
            $(".menu-bar").toggleClass( "open" );
           var li = this.id;
           console.log(li);
           if (li=="a"){
            console.log(li);
             $(".menu-bar").empty();
             $(".menu-bar").append('<li>'+'Dashboard'+'</li>','<li>'+'Transactions'+'</li>', '<li>'+'Reports'+'</li>');
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+'Landing Page'+'</li>','<li>'+'Billing Master'+'</li>',
              	 '<li>'+'Create/View Student Details'+'</li>',
                '<li>'+'Create/View Family/Sponsor Details'+'</li>',
                      
                      '<li>'+'Create Invoice'+'</li>',
                      '<li>'+'Create Credits'+'</li>',
                      '<li>'+'Create Payments'+'</li>',
                      '<li>'+'View Family & Student Transactions'+'</li>',
                      '<li>'+'Batch Process'+'</li>',
                      
                      '<li>'+'Family/Sponsor Central'+'</li>',
                      );
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+new_task_1+'</li>');
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+new_task_1+'</li>');
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+new_task_1+'</li>');
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+new_task_1+'</li>');
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+new_task_1+'</li>');
           }
           else if (li=="b"){
              $(".menu-bar").empty();
              $(".menu-bar").append('<li>'+new_task_1+'</li>');
           }
          });

          $(".menu-bar li").click(function()
          {
            $(".menu-bar").toggleClass( "none" );
          });
          $(document).on("click", ".menu-bar li", function(event) {
           //alert($(this).text()+" clicked");
           if ( $(this).text() == "Create Invoice") {
          window.location.href = "Create_invoice.html";
          }
           else if ( $(this).text() == "Create Credits") {
          window.location.href = "Create_credits.html";
          }
           else if ( $(this).text() == "Create Payments") {
          window.location.href = "Create_payments.html";
          }
           else if($(this).text() =="View Family & Student Transactions"){
            window.location.href = "view_family_student_transaction.html";
           }
           else if($(this).text() =="Batch Process"){
            window.location.href = "index_batch.html";
           }
            else if($(this).text() =="Family/Sponsor Central"){
            window.location.href = "Family_Sponsor_Central_2.html";
           }
            else if($(this).text() =="Create/View Family/Sponsor Details"){
            window.location.href = "Create_View_Family_Sponsor_Details.html";
           }
            else if($(this).text() =="Create/View Student Details"){
            window.location.href = "Create_View_Student_Details.html";
           }
            else if($(this).text() =="Billing Master"){
            window.location.href = "Billing_Master.html";
           }
            else if($(this).text() =="Landing Page"){
            window.location.href = "sb_landing_page.html";
           }
          });
          }
          );

          //tool tip
        $(document).ready(function(){
        $('.tooltipped').tooltip({delay: 50});
        });
        //selection
          $(document).ready(function()
            {
             $('select').material_select();
            });
        //tab
         $(document).ready(function(){
         $('ul.tabs').tabs();
        });

           //$(document).ready(function(){
          // $('ul.tabs').tabs('select_tab', 'tab_id');
        //  });
        //search autocomplete

        //account code and name autocomplete
          $(document).ready(function() {
          $('input.autocomplete').autocomplete({
          data: {
            "Registration Fee": null,
            "Summer Camp": null,
            "Uniform Sales": null,
            "Tution monthly": null,            
          },
          limit: 20, //The max amount of results that can be shown at once. Default: Infinity.
          onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
          },
          minLength: 1, //The minimum length of the input for the autocomplete to start. Default: 1.
        });
       });
      //dropdown input fill 
      $(document).ready(function () {
        $('#acc_type').on('change', function () {
            var myValue = $(this).val();
            var amt=0;
           // var myText = $.trim($("#category :selected").text()).toLowerCase(); // Trim spaces and convert to lowercase for comparison               
            if( myValue==="1"){
              amt=1500;
              //console.log(amt);
              document.getElementById("amount").value = amt;
              }
              else if (myValue==="2") {
                amt=150;
                document.getElementById("amount").value = amt;
              }
              else if (myValue==="3") {
              amt=12500;
              document.getElementById("amount").value = amt;
              }
        });
        });    
        //show_hide
        function show_hide_elements() 
        {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") 
        {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        }
        //collapsible search
          $(document).ready(function(){
            $('.collapsible').collapsible();
          });
          // Open
          $('.collapsible').collapsible('open',0);
          // Close
          $('.collapsible').collapsible('close',0);
          //system current date
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1; //January is 0!
          var yyyy = today.getFullYear();
          if(dd<10) {
              dd = '0'+dd
          } 
          if(mm<10) {
              mm = '0'+mm
          } 
          today = mm + '/' + dd + '/' + yyyy;
           //document.write(today);
           //dynamic addition of records
            var sno = 0;
            $("#add_bill").click(function() {
              var charge_date= $("#charge_date").val();
              var due_date = $("#due_date").val();
              var amount= $("#amount").val();
              var acc_option_number= $("#acc_type").val();
              var acc_name;
              var acc_code = acc_option_number;
              console.log(acc_code);
              if (acc_code==1) { acc_code="REG"; acc_name="Registration Fee"}
              else if (acc_code==2) { acc_code="CAMP"; acc_name="Summer Camp" }
              else if (acc_code==3) { acc_code="TUT"; acc_name="Tuition Monthly" }
              var scl_year = $("#acc_code").val();  
              var new_row = "<tr><td>" + ++sno + "</td><td>"+today+"</td><td>"+today+"</td><td>"+amount+"</td><td>" + acc_code + "</td><td>" + acc_name + "</td><td>"+scl_year+"</td></tr>";
              console.log(new_row); 
              var t = document.getElementById("tot_charges").innerHTML;
              document.getElementById("tot_charges").innerHTML= +t+ +amount;
              $("#table_container tbody").append(new_row);
              document.getElementById("myForm").reset();
               return false;
              //disable button
              document.getElementById("attach_file").disabled = true;    
          });
          //delete table rows
          function DeleteRows() {
          document.getElementById("myForm").reset();
          var rowCount = table_container.rows.length;
          for (var i = rowCount - 1; i > 0; i--) {
            table_container.deleteRow(i);
        }
        sno=0;
    }

    function SaveTable(){
      $('#Billing_table').html('');
          var myRows = [];
          var headersText = [];
          var $headers = $("th");
          // Loop through grabbing everything
          var $rows = $("#table_container tbody tr").each(function(index) {
          $cells = $(this).find("td");
          myRows[index] = {};

          $cells.each(function(cellIndex) {
          // Set the header text
          if(headersText[cellIndex] === undefined) {
          headersText[cellIndex] = $($headers[cellIndex]).text();
          }
          // Update the row object with the header/cell combo
          myRows[index][headersText[cellIndex]] = $(this).text();
        });    
      });
          var myObj = myRows;
          //alert(JSON.stringify(myObj));
          localStorage.setItem('myObj', JSON.stringify(myObj));
          window.location.href = "index_main.html";
          //var retrievedObject = localStorage.getItem('myObj');
          // console.log('retrievedObject: ', JSON.parse(retrievedObject));
      }



      $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

    $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
       
    //$('#add_billing_charges').modal('open');
     $('.modal').modal();
     $('.modal').modal({
         ready: function(modal, trigger) {
         $('ul.tabs').tabs();
         }
         });
    $('input#input_text, textarea#textarea1').characterCounter();

  });


$(document).ready(function()
{
  $('#setup_recurrence').show();
  $('#billing_charges_content').show();
  $('#ra').show();
  $('#be').show();
  $('#bm').hide();
  //batch
  $("#batch_management").click(function(){
     $('.stepper').hide();
     $('#confirm_batch_table').show();
     $('#batch_management').hide();
     $('#batch_entry').show();
     $('#bm').show();
     $('#be').hide();
     $('#ra').show();
  })
  $("#batch_entry").click(function(){
     $('.stepper').show();
     $('#confirm_batch_table').hide();
     $('#batch_entry').hide();
     $('#batch_management').show();
     $('#be').show();
    $('#bm').hide();
  })
  $("#apply_batch").click(function(){
     $('.stepper').hide();
     $('#confirm_batch_table').show();
     $('#bm').show();
     $('#be').hide();
     $('#ra').show();
  });
  $( "#setup_recurrence" ).click(function() {
   // $("#setup_recurrence").
   // $(".modal-content").remove();
   //$(this).removeClass("waves-effect waves-light").addClass('disabled');
   $('#setup_recurrence').hide();
   $('#billing_charges').show();
   $('#billing_charges_content').hide();
   $('#set_recurrence_content').show();
   $('ul.tabs').tabs();
}); 
  $('#billing_charges').click(function() {
    $('#billing_charges').hide();
    $('#setup_recurrence').show();
    $('#set_recurrence_content').hide();
    $('#billing_charges_content').show();
    
  });
});

$( "#add_credits" ).click(function() {
  //alert( "Handler for .click() called." );
  $('#masterdiv').hide();
  $('#credits_template').show();
  $('#credits_main').hide();
  $('#payments_main').hide();
});  


$( "#add_payments" ).click(function() {
  //alert( "Handler for .click() called." );
  $('#masterdiv').hide();
  $('#payments_template').show();
  $('#credits_main').hide();
   $('#payments_main').hide();
}); 

$( "#invoice_listing" ).click(function() {
  //alert( "Handler for .click() called." );
  $('#transaction_date_template').hide();
  $('#Charge_Due_Date_template').show();
}); 
$( "#credits_listing" ).click(function() {
  //alert( "Handler for .click() called.");
  $('#transaction_date_template').show();
  $('#Charge_Due_Date_template').hide();
}); 
$( "#payments_listing" ).click(function() {
  //alert( "Handler for .click() called.");
  $('#transaction_date_template').show();
  $('#Charge_Due_Date_template').hide();
}); 

//billing master screen
$(document).ready(function()
{
$('#summary_code_template').show();
$('#search_pannel').show();
$('#static_pannel').show();
  $( "#summary_codes" ).click(function() {
     
     $('#billing_code_template').hide();
     $('#other_code_template').hide();
     $('#payment_code_template').hide();
     $('#credit_code_template').hide();
     $('#summary_code_template').show();
  }); 
  $( "#billing_codes" ).click(function() {
 
  //$("#test5").width(550);
  $('#static_pannel').show();
  $('#summary_code_template').hide();
  $('#other_code_template').hide();
  $('#payment_code_template').hide();
  $('#credit_code_template').hide();
   $('#billing_code_template').show();
});
 $( "#other_codes" ).click(function() {
  $('#static_pannel').show();
  $('#summary_code_template').hide();
  $('#billing_code_template').hide();
  $('#payment_code_template').hide();
  $('#credit_code_template').hide();
  $('#other_code_template').show();
  
});
 $( "#payment_codes" ).click(function() {
  
  $('#static_pannel').show();
  $('#summary_code_template').hide();
  $('#billing_code_template').hide();
  $('#other_code_template').hide();
  $('#credit_code_template').hide();
  $('#payment_code_template').show();
});
  $( "#credit_codes" ).click(function() {
  
  $('#static_pannel').show();
  $('#summary_code_template').hide();
  $('#billing_code_template').hide();
  $('#other_code_template').hide();
  $('#payment_code_template').hide();
   $('#credit_code_template').show();
});

  $( "#billing_services_listing" ).click(function() {
 
  $('#static_pannel').hide();
  $('#search_pannel').hide();
  $('#billing_services').hide();
  $('#billing_services_listing').hide();
  $('#enter_billing_services_title').hide();
  $('#billing_services_listing_template').show();
  $('#enter_billing_services').show();
  $('#billing_services_listing_title').show();
  $('#summary_code_template').hide();
  $('#setup_family_sponsor_template').show();
});
 
 $( "#enter_billing_services" ).click(function() {
 
  $('#static_pannel').show();
  $('#search_pannel').show();
  $('#billing_services_listing_title').hide();
  $('#billing_services_listing_template').hide();
  $('#enter_billing_services').hide();
  $('#enter_billing_services_title').show();
  $('#billing_services').show();
  $('#billing_services_listing').show();
  $('#setup_family_sponsor_template').hide();
  $('#summary_code_template').show();
});

$('.del_row').click(function(){
  var currentli = $('.table_body').find('td.del_row').parent().prop('className');
  console.log(currentli);
  if (currentli=="deletable_row_1") {
    $('.deletable_row_1').remove();
  }
  else if (currentli=="deletable_row_2") {
     $('.deletable_row_2').remove();
  }
  else if( currentli=="deletable_row_3" )
    $('.deletable_row_3').remove();
  
})
});

$(function(){
  $("#monthly_rec").prop("checked", true);
  $('#month_rec_cnt').show();
  $('input[type="radio"]').click(function(){
    var checked_id = $(this).attr( 'id' );
   // if ($("#weekly_rec").is(':checked'))
    //{
     // alert(checked_id);
    //}
    //else
    //else if ($("#weekly_rec").is(':cheked')) {
    //  alert($(this).val());
    //}
    if (checked_id=="monthly_rec") {
      $('#month_rec_cnt').show();
      $('#week_rec_cnt').hide();
    }
    else if (checked_id=="weekly_rec") {
      $('#week_rec_cnt').show();
      $('#month_rec_cnt').hide();
      
    }
  });
});

//$('.element').click(function() {
//   if($('#radio_button').is(':checked')) { alert("it's checked"); }
//});