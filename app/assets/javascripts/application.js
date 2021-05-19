//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require alertify
//= require jquery3
//= require jquery_ujs
//= require alertify
//= require alertify/confirm-ujs
//= require popper
//= require bootstrap-datepicker/core
//= require bootstrap-sprockets
//= require cocoon

var framerate = 25;

var NoOfPartsSelector = 0;
var ProgLogoUrl = "https://drive.google.com/uc?id=1qfL8SdBC_2Bu7_8kmp55rqLYXN8btNGj&export=download";

var TimeCodePattern = /^\d{2}:\d{2}:\d{2}:([01]\d|2[0-4])$/;
//var TimeCodePattern = new RegExp("(2[0-3]|1[0-9]|[01][0-9]):([0-5][0-9]):([0-5][0-9]):([01][0-9]|1[0-9]|2[0-4])");


// Email preparation parameters
var senderName = "";
var senderEmail = "";
var ProgTitle = "";
var IngestDate = "";
var AspectRatioSection = "";
var TodayDate = "";
var ContactNo = "";
var ProgID = "";
var TXDate = "";
var NoOfParts = "";
var PartsHtml = "";


var ProgLogosList = new Array();
ProgLogosList['Alaraby Alyoum'] = ['/images/Alaraby_Alyoum_Bug.png', 'https://drive.google.com/uc?id=1qfL8SdBC_2Bu7_8kmp55rqLYXN8btNGj&export=download'];
ProgLogosList['Alaraby Al Ryadhi'] = ['/images/Alaraby_Alriadi_Bug.png', 'https://drive.google.com/uc?id=1QdhEyuXIFaH_3PGKLpu_yxDQRn2eyl2w&export=download'];
ProgLogosList['Alaraby Tech'] = ['/images/Alaraby_Tech.jpeg', 'https://drive.google.com/uc?id=1ZOx-tCJwvMqvN8cayDkCTHGSSB2VlvHK&export=download'];
ProgLogosList['Aljar Alghareeb'] = ['/images/Aljar_Alghareeb_Bug.png', 'https://drive.google.com/uc?id=1ys5BFm1GLKp0xidqAY4Teal24wAoND8Q&export=download'];
// ProgLogosList['Alkashaf'] = ['/images/Alkashaf_L3rd_Bug.png', 'https://drive.google.com/uc?id=1oGzBI0wRfuqNIKNqGwQibXqMGIbiRdUm&export=download'];
ProgLogosList['Almagharby'] = ['/images/Almagharby L3rd_Bug.png', 'https://drive.google.com/uc?id=1WWDQMaGtP2HqrRg3OE9WvVClcG1zAgsL&export=download'];
ProgLogosList['Almawhooboon Fel Ard'] = ['/images/Almawhooboon_Fel_Ard_L3rd_Bug.png', 'https://drive.google.com/uc?id=1tiYb1ss9riKNrTFcj2nGXDlaqH5s0icp&export=download'];
ProgLogosList['Alusbua Asury'] = ['/images/Alusbua Asury_L3rd_Bug.png', 'https://drive.google.com/uc?id=1S9AosRSWP0bR1COsDauSYYjmOX9kIzit&export=download'];
// ProgLogosList['Aseer Alkotob'] = ['/images/Aseer_Alkotob_L3rd_Bug.png', 'https://drive.google.com/uc?id=1u89_bIjoYQ7QYHOWyHnYvIG-vqMRg4yn&export=download'];
ProgLogosList['Diwan Alarab'] = ['/images/Diwan_Alarab_L3rd_Bug.png', 'https://drive.google.com/uc?id=1N-nt1VhR3ak25bRuuLfCnElJ_spUVyIi&export=download'];
ProgLogosList['Documentaries'] = ['/images/VFLogo.png', 'https://drive.google.com/uc?id=1ZOx-tCJwvMqvN8cayDkCTHGSSB2VlvHK&export=download'];
ProgLogosList['Fe Rewaya Okhra'] = ['/images/Wa Fi Riwaya Ukra_L3rd_Bug.png', 'https://drive.google.com/uc?id=1OydMbcoyLfXh-WILg2gUjpU_mA1UP19v&export=download'];
// ProgLogosList['Filmi'] = ['/images/Filmi_L3rd_Bug.png', 'https://drive.google.com/uc?id=1ZWDi-PnAMcrtJ1lESY0JzYudysunxjl1&export=download'];
ProgLogosList['Foshat Fikr'] = ['/images/Foshat_Fikr_L3rd_Bug.png', 'https://drive.google.com/uc?id=1lag_7-tR5uqoID_8-8hSUAqvLmzLVgDW&export=download'];
ProgLogosList['Hadith Khas'] = ['/images/Hadith_Khas_L3rd_Bug.png', 'https://drive.google.com/uc?id=13ldR1dlRaDGvLwICDuKebuQUTVR8kpm9&export=download'];
ProgLogosList['Huna Filisteen'] = ['/images/Huna Filisteen_L3rd_Bug.png', 'https://drive.google.com/uc?id=1p2nooboOhV5MQUJnf_Td0nk0uvcQRk5g&export=download'];
ProgLogosList['Jiran Alarab'] = ['/images/Jeeran_Alarab_L3rd_Bug.png', 'https://drive.google.com/uc?id=1_FouOCi-sis99mVsvIA4Qu943Y7QaomP&export=download'];
ProgLogosList['Jadal'] = ['/images/Jadal_L3rd_Bug.png', 'https://drive.google.com/uc?id=1vv4hIryh47OVrNl6DQg1LJIND2tBc77e&export=download'];
ProgLogosList['Joe Show'] = ['/images/Joe Show Bug.png', 'https://drive.google.com/uc?id=1DyVolcE5KzLlH4KBS0MznQvc_SX6KUsW&export=download'];
ProgLogosList['Khalij Elarab'] = ['/images/KA BUG.png', 'https://drive.google.com/uc?id=1ggXqXEkC946dOZYr92qldmqrcrrBsn2Q&export=download'];
ProgLogosList['Kama Warad'] = ['/images/Kama_Warad_Bug.png', 'https://drive.google.com/uc?id=17oqmzY_mZTp6Ir6keHr0kJ5G9yrk38Gb&export=download'];
ProgLogosList['Khat Akhdar'] = ['/images/Khat_akhdar.png', 'https://drive.google.com/uc?id=1cFsZc7V7Q43hus2BMb9VT9DNu3W7ptp9&export=download'];
ProgLogosList['Kontu Hunak'] = ['/images/Kontu_Hunak.png', 'https://drive.google.com/uc?id=1v4qXLghsqP_HMj-ZoxzgMRGQHhTiy62C&export=download'];
ProgLogosList['Lil Khabar Bakya'] = ['/images/Lil_Khabar_Bakia_Bug.png', 'https://drive.google.com/uc?id=1LpOwWRrc0MXhqNiP0xxktB3aVtd5GSpt&export=download'];
ProgLogosList['Maalaat Alnass'] = ['/images/Maalaat_Alnass Bug.png', 'https://drive.google.com/uc?id=1hGKmAaNFQSI8ZolE9m84tHtGDJPjhjCj&export=download'];
ProgLogosList['Mozakarat'] = ['/images/Mozakarat.png', 'https://drive.google.com/uc?id=1TI-kGN9JA67aCXQfAEgzv7BCSiotxaJf&export=download'];
ProgLogosList['Remix'] = ['/images/Remix Bug.png', 'https://drive.google.com/uc?id=1gKA1ZsbDruYrJDe72FB3nIgwe-8S9RZH&export=download'];
ProgLogosList['Shababik'] = ['/images/SH_L3rd_Bug.png', 'https://drive.google.com/uc?id=1WNFq1grqC184ubax-SQzqTlrIca8iIou&export=download'];
ProgLogosList['Sunduq Eldunia'] = ['/images/Sunduq_Bug.jpg', 'https://drive.google.com/uc?id=1hq1sje5BuYJzK-P7SH8Dqq_zn3z8n_Np&export=download'];
ProgLogosList['Taqdir Mawqif'] = ['/images/Taqdir Mawqif_L3rd_Bug.png', 'https://drive.google.com/uc?id=1TeN9C6KgfeqpOGIS2E2Ojkls86z9X1Ga&export=download'];
// ProgLogosList['War Photography'] = ['/images/War_Photography_L3rd_Bug.png', 'https://drive.google.com/uc?id=1o71S-kucNumfXrQi7JJXddn342HdTkx1&export=download'];
// ProgLogosList['Wonho'] = ['/images/Wonho_L3rd_Bug.png', 'https://drive.google.com/uc?id=1T3Sk4cuJCEe4uVU3bvIcoQcK3NTWKXM-&export=download'];
// ProgLogosList['Yawmiyat Alfilistini'] = ['/images/Yawmiyat Alfilistini_L3rd_Bug.png', 'https://drive.google.com/uc?id=1atELJXTgz1jfKGfh-4KsGekbGCX2pfi2&export=download'];
ProgLogosList['Other Program'] = ['/images/VFLogo.png', 'https://drive.google.com/uc?id=1ZOx-tCJwvMqvN8cayDkCTHGSSB2VlvHK&export=download'];


$(document).on('turbolinks:load', function() {

  // Load the list of programes
  LoadProgList(ProgLogosList);

  //ViewingFormTitle
  //
  $("#ProgramTitleOption").on('change', function() {
    var ProgramTitleOption = this.value;

    //var selectedOptionText = $("#ProgramTitleOption option:selected").text();
    $("#ProgTitle").val(ProgramTitleOption.toUpperCase());
    $("#ViewingFormTitle h5").html(ProgramTitleOption.toUpperCase() + " Viewing Form")
    $("#Prog_logo").attr("src", ProgLogosList[ProgramTitleOption][0]);

    // For Email Filling preparation; Fill the URL (not the local icon)
    ProgLogoUrl = ProgLogosList[ProgramTitleOption][1];

    if (ProgramTitleOption === "Other Program") {
      $("#ProgTitle").removeAttr('readonly');

    } else {
      $("#ProgTitle").attr('readonly', true);
    }

  });

  // Dissable link to remove parts on window load
  if ($('#NoOfParts').val($('.nested-fields').length) == 0) {
    $('.li_1').addClass('d-none');
    $('.li_2').removeClass('d-none');
  } else {
    $('.li_1').removeClass('d-none');
    $('.li_2').addClass('d-none');
  }

  // adding part fields with cocoon
  $('.parts').on('cocoon:after-insert', function(e, inserted_item) {
    var RowNo = $('.nested-fields').length;
    $(inserted_item).wrap("<div class='Titled-row' id='Row" + RowNo + "'></div>")
    $("<div id='RowTitle'><h5> Part: " + RowNo + "</h5></div>").prependTo(inserted_item);
    $('#NoOfParts').val(RowNo).removeClass("is-invalid").addClass('is-valid');
    // $('#NoOfParts').removeClass("is-invalid");
    // $('#NoOfParts').addClass('is-valid');
    $(inserted_item).find('input.in').prop('id', "Row" + RowNo + "IN");
    $(inserted_item).find('input.out').prop('id', "Row" + RowNo + "OUT");
    $(inserted_item).find('input.dur').prop('id', "Row" + RowNo + "DUR");
    $(inserted_item).find('textarea.notes').prop('id', "Row" + RowNo + "Notes");
    
    // Enable link to remove parts when parts available
    if (RowNo > 0) {
      $('.li_1').addClass('d-none');
      $('.li_2').removeClass('d-none');
    }
    // Insert value to IN field of newly added parts 
    if (RowNo > 1) {
      var prevRowID = "Row" + (RowNo - 1);
      var prevOUTpart = document.getElementById(prevRowID + "OUT").value;
      var prevDURpart = document.getElementById(prevRowID + "DUR").value;
      if (prevDURpart !== 'Invalid Timecodes' && prevOUTpart !== '' && isValidTimeCode(prevOUTpart) === true) {
        var newOUTpart = frames_to_timecode(timecode_to_frames(prevOUTpart) + 1);
        $("#Row" + RowNo + "IN").val(newOUTpart);
      } else {
        $("#Row" + RowNo + "IN").val("");   
      }
    }
  });

  // removing part fields
  $('#remove_association').on('click', function() {
    var num = $('.nested-fields').length;
    $('#Row' + num).remove();
    $('#NoOfParts').val(num - 1);
    // Dissable link to remove parts when parts unavailable
    if (num <= 1) {
      $('.li_1').removeClass('d-none');
      $('.li_2').addClass('d-none');
      $('#NoOfParts').removeClass("is-valid").addClass('is-invalid');
    }
  });

  $('#sendForm').click(function(e) {

    if (!isValidInputs()) {
      e.preventDefault();
    } else if (isValidInputs() && !confirmSendingForm()) {
      e.preventDefault();
    }
  });

  $('.main-form-part .form-control').on('change', function() {
    var field_value = $(this).val();
    // console.log(field_value);
    if (field_value === '') {
      $(this).removeClass("is-valid");
      $(this).toggleClass("is-invalid");
    } else {
      $(this).removeClass("is-invalid");
      $(this).addClass('is-valid');
    }
  });
  
  $(".parts").on('focus', '.calc', function() {
    //console.log("entered");
    //console.log($(this).prop('id'));
    var timeCode = $(this); //Get all elements with class "calc"
    for (var i = 0; i < timeCode.length; i++) { //Loop trough elements
      timeCode[i].addEventListener('keyup', function(e) { //Add event listener to every element
        var key = e.keyCode || e.which;
        var reg = /[0-9]|[0-9]:[0-9]|[0-9]:[0-9]:[0-9]|[0-9]:[0-9]:[0-9]:[0-9]/;
        if ((this.value.length == 2 || this.value.length == 5 || this.value.length == 8) && reg.test(this.value) && key !== 8) this.value = this.value + ":"; //Add colon 
        if (this.value.length > 11) this.value = this.value.substr(0, this.value.length - 1); //Delete the last digit if string length > 11
        if (isValidTimeCode(this.value) === false) {
          $(this).removeClass('is-valid');
          $(this).addClass("is-invalid");
        } else {
          $(this).removeClass('is-invalid');
          $(this).addClass('is-valid');
        }
      });
    };

    $(this).on('change', function() {

      var sourceID = $(this).prop("id");
      var RowNo = sourceID.substring(0, 4);
      var currentRow = parseInt(RowNo.substr(RowNo.length - 1));

      var INpart = document.getElementById(RowNo + "IN").value;
      var OUTpart = document.getElementById(RowNo + "OUT").value;
      console.log(isValidTimeCode(INpart));
      console.log(isValidTimeCode(OUTpart));

      if (isValidTimeCode(INpart) === false || isValidTimeCode(OUTpart) === false) {

        if (isValidTimeCode(INpart) === false) {
          $("#Row" + (currentRow) + "IN").removeClass('is-valid');
          $("#Row" + (currentRow) + "IN").addClass("is-invalid");
        } else {
          $("#Row" + (currentRow) + "IN").removeClass('is-invalid');
          $("#Row" + (currentRow) + "IN").addClass('is-valid');
        }

        if (isValidTimeCode(OUTpart) === false) {
          $("#Row" + (currentRow) + "OUT").removeClass('is-valid');
          $("#Row" + (currentRow) + "OUT").addClass('is-invalid');
        } else {
          $("#Row" + (currentRow) + "OUT").removeClass('is-invalid');
          $("#Row" + (currentRow) + "OUT").addClass('is-valid');
        }
      } else {
        $("#Row" + (currentRow) + "IN").removeClass('is-invalid');
        $("#Row" + (currentRow) + "IN").addClass('is-valid');
        $("#Row" + (currentRow) + "OUT").removeClass('is-invalid');
        $("#Row" + (currentRow) + "OUT").addClass('is-valid');
      }

      var DURpart = CalcDur(INpart, OUTpart);

      if (DURpart === "Invalid Timecodes") {
        $('#' + RowNo + "DUR").val(DURpart);
        alertify.error('OUT-timecode must be greater than the IN-timecode');
        $("#" + RowNo + "OUT").removeClass('is-valid');
        $('#' + RowNo + "OUT").addClass('is-invalid');
        $("#" + RowNo + "DUR").removeClass('is-valid');
        $('#' + RowNo + "DUR").addClass('is-invalid');
      } else {
        $('#' + RowNo + "DUR").val(DURpart);
        $("#" + RowNo + "OUT").removeClass('is-invalid');
        $("#" + RowNo + "DUR").removeClass('is-invalid');
        $('#' + RowNo + "DUR").addClass('is-valid');
      }

      //to be used in setting the value of the timecode of the next part
      var nextRowID = "Row" + (currentRow + 1);
      // Update the number of chosen parts.
      var NoOfParts = document.getElementById("NoOfParts").value;
      if (NoOfParts > 1) {
        if ($("#" + nextRowID).length !== 0) {
          if (OUTpart !== '' && isValidTimeCode(OUTpart) === true) {
            var newOUTpart = frames_to_timecode(timecode_to_frames(OUTpart) + 1);
            $("#" + nextRowID + "IN").val(newOUTpart);
          } else {
            $("#" + nextRowID + "IN").val("");
            $("#" + nextRowID + "DUR").val("");
            $("#" + RowNo + "DUR").val("");
          }
        }
      }

      if (OUTpart === '' || (isValidTimeCode(OUTpart) === false)) {
        $("#" + RowNo + "DUR").val("");
      }
    });
  });
});

function LoadProgList(ProgLogosList) {
  var sel = document.getElementById('ProgramTitleOption');

  for (var progTitle in ProgLogosList) {
    var opt = document.createElement('option');

    opt.innerHTML = progTitle;
    opt.value = progTitle;
    sel.appendChild(opt);
  }
}

function FormatNumber(n) {
  return n > 9 ? "" + n : "0" + n;
}

function isValidTimeCode(timecode) { 
  // test the input value against the Input Pattern Specified.
  return (TimeCodePattern.test(timecode));
}

function isValidInputs() {
  var isAllValid = true;

  senderName = document.getElementById('senderName').value;
  senderEmail = document.getElementById('senderEmail').value;
  ProgTitle = document.getElementById('ProgTitle').value;
  IngestDate = document.getElementById('IngestDate').value;
  TodayDate = document.getElementById('TodayDate').value;
  ContactNo = document.getElementById('ContactNo').value;
  ProgID = document.getElementById('ProgID').value;
  TXDate = document.getElementById('TXDate').value;
  NoOfParts = document.getElementById('NoOfParts').value;
  AspectRatio = document.getElementById('AspectRatio').value;

  // var ErrorMsg = "Error: Check the inputs of th efollowing fields: <br />";

  if (ProgTitle === '') {
    isAllValid = false;
    // ErrorMsg += "      * Programme Title should not be Empty. <br />";
    alertify.error('Programme Title should not be Empty.');
    $("#ProgTitle").removeClass("is-valid");
    $("#ProgTitle").addClass("is-invalid");
  } else {
    $("#ProgTitle").removeClass("is-invalid");
    $("#ProgTitle").addClass('is-valid');
  }
  if (senderName === '') {
    isAllValid = false;
    // ErrorMsg += "      * Name should not be Empty. <br />";
    alertify.error('Name should not be empty.');
    $("#senderName").removeClass("is-valid");
    $("#senderName").addClass("is-invalid");
  } else {
    $("#senderName").removeClass("is-invalid");
    $("#senderName").addClass('is-valid');
  }
  if (senderEmail === '') {
    isAllValid = false;
    // ErrorMsg += "      * Email should not be Empty. <br />";
    alertify.error('Email should not be empty.');
    $("#senderEmail").removeClass("is-valid");
    $("#senderEmail").addClass("is-invalid");
  } else {
    $("#senderEmail").removeClass("is-invalid");
    $("#senderEmail").addClass('is-valid');
  }
  if (IngestDate === '') {
    isAllValid = false;
    // ErrorMsg += "      * Ingest Date should be chosen. <br />";
    alertify.error('Ingest Date should be chosen.');
    $("#IngestDate").removeClass("is-valid");
    $("#IngestDate").addClass("is-invalid");
  } else {
    $("#IngestDate").removeClass("is-invalid");
    $("#IngestDate").addClass('is-valid');
  }
  if (TodayDate === '') {
    isAllValid = false;
    // ErrorMsg += "      * Today Date should be chosen. <br />";
    alertify.error('Today Date should be chosen.');
    $("#TodayDate").removeClass("is-valid");
    $("#TodayDate").addClass("is-invalid");
  } else {
    $("#TodayDate").removeClass("is-invalid");
    $("#TodayDate").addClass('is-valid');
  }
  if (ContactNo === '') {
    isAllValid = false;
    // ErrorMsg += "      * Contact number should not be Empty. <br />";
    alertify.error('Contact number should not be Empty.');
    $("#ContactNo").removeClass("is-valid");
    $("#ContactNo").addClass("is-invalid");
  } else {
    $("#ContactNo").removeClass("is-invalid");
    $("#ContactNo").addClass('is-valid');
  }
  if (AspectRatio === '') {
    isAllValid = false;
    // ErrorMsg += "      * Aspect Ratio should not be Empty. <br />";
    alertify.error('Aspect Ratio should not be Empty.');
    $("#AspectRatio").removeClass("is-valid");
    $("#AspectRatio").addClass("is-invalid");
  } else {
    $("#AspectRatio").removeClass("is-invalid");
    $("#AspectRatio").addClass('is-valid');
  }
  if (ProgID === '') {
    isAllValid = false;
    // ErrorMsg += "      * Programme ID should not be Empty. <br />";
    alertify.error('Programme ID should not be Empty.');
    $("#ProgID").removeClass("is-valid");
    $("#ProgID").addClass("is-invalid");
  } else {
    $("#ProgID").removeClass("is-invalid");
    $("#ProgID").addClass('is-valid');
  }
  if (TXDate === '') {
    isAllValid = false;
    // ErrorMsg += "      * TX Date should be chosen. <br />";
    alertify.error('TX Date should be chosen.');
    $("#TXDate").removeClass("is-valid");
    $("#TXDate").addClass("is-invalid");
  } else {
    $("#TXDate").removeClass("is-invalid");
    $("#TXDate").addClass('is-valid');
  }
  if (NoOfParts === '0') {
    isAllValid = false;
    // ErrorMsg += "      * At least one part needs to be added. <br />";
    alertify.error('At least one part needs to be added.');
    $("#NoOfParts").removeClass("is-valid");
    $("#NoOfParts").addClass("is-invalid");
  } else {
    $("#NoOfParts").removeClass("is-invalid");
    $("#NoOfParts").addClass('is-valid');
  }

  // Check the inputs of the parts
  for (var i = 1; i <= NoOfParts; i++) {
    var id = "#Row" + i;
    if ($(id).length !== 0 ) {
      // If the part exists and not hidden
      var INpart = document.getElementById("Row" + (i) + "IN").value;
      var OUTpart = document.getElementById("Row" + (i) + "OUT").value;
      var DURpart = document.getElementById("Row" + (i) + "DUR").value;
      var Notes = document.getElementById("Row" + (i) + "Notes").value;

      if (INpart === '') {
        isAllValid = false;
        // ErrorMsg += "      * Part " + i + "-IN timecode should not be Empty. <br />";
        alertify.error('Part ' + i + '-IN timecode should not be Empty.');
        $("#Row" + (i) + "IN").removeClass("is-valid");
        $("#Row" + (i) + "IN").addClass("is-invalid");
      } else if (isValidTimeCode(INpart) === false) {
        isAllValid = false;
        // ErrorMsg += "      * Part " + i + "-IN timecode is invalid <br />";
        alertify.error('Part ' + i + '-IN timecode is invalid.');
        $("#Row" + (i) + "IN").removeClass("is-valid");
        $("#Row" + (i) + "IN").addClass("is-invalid");
      } else {
        $("#Row" + (i) + "IN").removeClass("is - invalid");
        $("#Row" + (i) + "IN").addClass('is-valid');
      }
      if (OUTpart === '') {
        isAllValid = false;
        // ErrorMsg += "      * Part " + i + "-OUT timecode should not be Empty. <br />";
        alertify.error('Part ' + i + '-OUT timecode should not be Empty.');
        $("#Row" + (i) + "OUT").removeClass("is-valid");
        $("#Row" + (i) + "OUT").addClass("is-invalid");
      } else if (isValidTimeCode(OUTpart) === false) {
        isAllValid = false;
        // ErrorMsg += "      * Part " + i + "-OUT timecode is invalid <br />";
        alertify.error('Part ' + i + '-OUT timecode is invalid.');
        $("#Row" + (i) + "OUT").removeClass("is-valid");
        $("#Row" + (i) + "OUT").addClass("is-invalid");
      } else {
        $("#Row" + (i) + "OUT").removeClass("is - invalid");
        $("#Row" + (i) + "OUT").addClass('is-valid');
      }

      if (DURpart === '') {
        isAllValid = false;
        // ErrorMsg += "      * Part " + i + "-DUR timecode should not be Empty. <br />";
        alertify.error('Part ' + i + '-DUR timecode should not be Empty.');
        $("#Row" + (i) + "DUR").removeClass("is-valid");
        $("#Row" + (i) + "DUR").addClass("is-invalid");
      } else if (isValidTimeCode(DURpart) === false) {
        isAllValid = false;
        // ErrorMsg += "      * Part " + i + "-DUR timecode is invalid <br />";
        alertify.error('Part ' + i + '-DUR timecode is invalid.');
        $("#Row" + (i) + "DUR").removeClass("is-valid");
        $("#Row" + (i) + "DUR").addClass("is-invalid");
      } else if (DURpart === "Invalid Timecodes") {
        isAllValid = false;
        alertify.error('Part ' + i + ' OUT-timecode must be greater than the IN-timecode');
        $("#Row" + (i) + "DUR").removeClass("is-valid");
        $("#Row" + (i) + "DUR").addClass("is-invalid");
      } else {
        $("#Row" + (i) + "DUR").removeClass("is-invalid");
        $("#Row" + (i) + "DUR").addClass('is-valid');
      }
    }
  }

  // $("#errorMsg").html(ErrorMsg + "</p>");

  // if (isAllValid == false) {
  //   $("#errorMsgDiv").show().delay(10000).fadeOut();
  // } else {
    return isAllValid;
  // }
}

function confirmSendingForm() {
  return confirm("Are you sure?");
}



function timecode_set_framerate(rate) {
  framerate = rate;
}

function timecode_get_framerate() {
  return framerate;
}

function timecode_to_frames(timecode) {
  var a = timecode.split(':');
  return ((Number(a[0]) * 3600 + Number(a[1]) * 60 + Number(a[2])) * framerate + Number(a[3]));
}


function frames_to_timecode(frames) {
  return '' + FormatNumber(Math.floor(frames / (3600 * framerate))) + ':' +
    FormatNumber(Math.floor((frames / (60 * framerate)) % 60)) + ':' +
    FormatNumber(Math.floor((frames / framerate) % 60)) + ':' +
    FormatNumber(frames % framerate);
}


function CalcDur(INpart, OUTpart) {
  if (INpart !== '' && OUTpart !== '') {
    if (timecode_to_frames(OUTpart) < timecode_to_frames(INpart)) {
      return "Invalid Timecodes";
    } else {
      return frames_to_timecode(timecode_to_frames(OUTpart) - timecode_to_frames(INpart));
    }
  } else {
    event.value = "";
  }
}