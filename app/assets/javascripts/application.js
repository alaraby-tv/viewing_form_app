// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require alertify
//= require jquery3
//= require popper
//= require bootstrap-datepicker
//= require bootstrap-sprockets

var framerate = 25;

var NoOfPartsSelector = 0;
var ProgLogoUrl = "https://drive.google.com/uc?id=1qfL8SdBC_2Bu7_8kmp55rqLYXN8btNGj&export=download";

var TimeCodePattern = new RegExp("([0-9][0-9]):([0-5][0-9]):([0-5][0-9]):([0-2][0-4])");


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
ProgLogosList['Alaraby Alyoum'] = ['/assets/Alaraby_Alyoum_Bug.png', 'https://drive.google.com/uc?id=1qfL8SdBC_2Bu7_8kmp55rqLYXN8btNGj&export=download'];
ProgLogosList['Alaraby Al Ryadhi'] = ['/assets/Alaraby_Alriadi_Bug.png', 'https://drive.google.com/uc?id=1QdhEyuXIFaH_3PGKLpu_yxDQRn2eyl2w&export=download'];
ProgLogosList['Aljar Alghareen'] = ['/assets/Aljar_Alghareen_L3rd_Bug.png', 'https://drive.google.com/uc?id=1ys5BFm1GLKp0xidqAY4Teal24wAoND8Q&export=download'];
ProgLogosList['Alkashaf'] = ['/assets/Alkashaf_L3rd_Bug.png', 'https://drive.google.com/uc?id=1oGzBI0wRfuqNIKNqGwQibXqMGIbiRdUm&export=download'];
ProgLogosList['Almagharby'] = ['/assets/Almagharby L3rd_Bug.png', 'https://drive.google.com/uc?id=1WWDQMaGtP2HqrRg3OE9WvVClcG1zAgsL&export=download'];
ProgLogosList['Almawhooboon Fel Ard'] = ['/assets/Almawhooboon_Fel_Ard_L3rd_Bug.png', 'https://drive.google.com/uc?id=1tiYb1ss9riKNrTFcj2nGXDlaqH5s0icp&export=download'];
ProgLogosList['Alusbua Asury'] = ['/assets/Alusbua Asury_L3rd_Bug.png', 'https://drive.google.com/uc?id=1S9AosRSWP0bR1COsDauSYYjmOX9kIzit&export=download'];
ProgLogosList['Aseer Alkotob'] = ['/assets/Aseer_Alkotob_L3rd_Bug.png', 'https://drive.google.com/uc?id=1u89_bIjoYQ7QYHOWyHnYvIG-vqMRg4yn&export=download'];
ProgLogosList['Diwan Alarab'] = ['/assets/Diwan_Alarab_L3rd_Bug.png', 'https://drive.google.com/uc?id=1N-nt1VhR3ak25bRuuLfCnElJ_spUVyIi&export=download'];
ProgLogosList['Fe Rewaya Okhra'] = ['/assets/Wa Fi Riwaya Ukra_L3rd_Bug.png', 'https://drive.google.com/uc?id=1OydMbcoyLfXh-WILg2gUjpU_mA1UP19v&export=download'];
ProgLogosList['Filmi'] = ['/assets/Filmi_L3rd_Bug.png', 'https://drive.google.com/uc?id=1ZWDi-PnAMcrtJ1lESY0JzYudysunxjl1&export=download'];
ProgLogosList['Foshat Fikr'] = ['/assets/Foshat_Fikr_L3rd_Bug.png', 'https://drive.google.com/uc?id=1lag_7-tR5uqoID_8-8hSUAqvLmzLVgDW&export=download'];
ProgLogosList['Hadith Khas'] = ['/assets/Hadith_Khas_L3rd_Bug.png', 'https://drive.google.com/uc?id=13ldR1dlRaDGvLwICDuKebuQUTVR8kpm9&export=download'];
ProgLogosList['Huna Filisteen'] = ['/assets/Huna Filisteen_L3rd_Bug.png', 'https://drive.google.com/uc?id=1p2nooboOhV5MQUJnf_Td0nk0uvcQRk5g&export=download'];
ProgLogosList['Jiran Alarab'] = ['/assets/Jeeran_Alarab_L3rd_Bug.png', 'https://drive.google.com/uc?id=1_FouOCi-sis99mVsvIA4Qu943Y7QaomP&export=download'];
ProgLogosList['Jadal'] = ['/assets/Jadal_L3rd_Bug.png', 'https://drive.google.com/uc?id=1vv4hIryh47OVrNl6DQg1LJIND2tBc77e&export=download'];
ProgLogosList['Joe Show'] = ['/assets/Joe Show Bug.png', 'https://drive.google.com/uc?id=1DyVolcE5KzLlH4KBS0MznQvc_SX6KUsW&export=download'];
ProgLogosList['Khalij Elarab'] = ['/assets/KA BUG.png', 'https://drive.google.com/uc?id=1ggXqXEkC946dOZYr92qldmqrcrrBsn2Q&export=download'];
ProgLogosList['Kama Warad'] = ['/assets/Kama_Warad_Bug.png', 'https://drive.google.com/uc?id=17oqmzY_mZTp6Ir6keHr0kJ5G9yrk38Gb&export=download'];
ProgLogosList['Khat Akhdar'] = ['/assets/Khat_akhdar.png', 'https://drive.google.com/uc?id=1cFsZc7V7Q43hus2BMb9VT9DNu3W7ptp9&export=download'];
ProgLogosList['Kuntu Hunak'] = ['/assets/Kuntu Hunak_L3rd_Bug.png', 'https://drive.google.com/uc?id=1v4qXLghsqP_HMj-ZoxzgMRGQHhTiy62C&export=download'];
ProgLogosList['Lil Khabar Bakya'] = ['/assets/Lil_Khabar_Bakia_Bug.png', 'https://drive.google.com/uc?id=1LpOwWRrc0MXhqNiP0xxktB3aVtd5GSpt&export=download'];
ProgLogosList['Maalaat Alnass'] = ['/assets/Maalaat_Alnass Bug.png', 'https://drive.google.com/uc?id=1hGKmAaNFQSI8ZolE9m84tHtGDJPjhjCj&export=download'];
ProgLogosList['Rehla Be Mahfathtain'] = ['/assets/Rehla_BM_S2.png', 'https://drive.google.com/uc?id=1TI-kGN9JA67aCXQfAEgzv7BCSiotxaJf&export=download'];
ProgLogosList['Remix'] = ['/assets/Remix Bug.png', 'https://drive.google.com/uc?id=1gKA1ZsbDruYrJDe72FB3nIgwe-8S9RZH&export=download'];
ProgLogosList['Shababik'] = ['/assets/SH_L3rd_Bug.png', 'https://drive.google.com/uc?id=1WNFq1grqC184ubax-SQzqTlrIca8iIou&export=download'];
ProgLogosList['Sunduq Eldunia'] = ['/assets/Sunduq_Bug.jpg', 'https://drive.google.com/uc?id=1hq1sje5BuYJzK-P7SH8Dqq_zn3z8n_Np&export=download'];
ProgLogosList['Taqdir Mawqif'] = ['/assets/Taqdir Mawqif_L3rd_Bug.png', 'https://drive.google.com/uc?id=1TeN9C6KgfeqpOGIS2E2Ojkls86z9X1Ga&export=download'];
ProgLogosList['War Photography'] = ['/assets/War_Photography_L3rd_Bug.png', 'https://drive.google.com/uc?id=1o71S-kucNumfXrQi7JJXddn342HdTkx1&export=download'];
ProgLogosList['Wonho'] = ['/assets/Wonho_L3rd_Bug.png', 'https://drive.google.com/uc?id=1T3Sk4cuJCEe4uVU3bvIcoQcK3NTWKXM-&export=download'];
ProgLogosList['Yawmiyat Alfilistini'] = ['/assets/Yawmiyat Alfilistini_L3rd_Bug.png', 'https://drive.google.com/uc?id=1atELJXTgz1jfKGfh-4KsGekbGCX2pfi2&export=download'];
ProgLogosList['Other Programme'] = ['/assets/VFLogo.png', 'https://drive.google.com/uc?id=1ZOx-tCJwvMqvN8cayDkCTHGSSB2VlvHK&export=download'];


$(document).on('turbolinks:load', function() {
  $('.datepicker').datepicker({
    orientation: "top right"
  });
  var AmountField = document.getElementById("AmountField");
  var NoOfPartsSelector = document.getElementById("NoOfParts");
  

  // Load the list of programes
  LoadProgList(ProgLogosList);
  // then style it to the custom select
  //CustomSelectPrep();

  $("#NoOfParts").on('change', function() {
    NoOfPartsSelector = this.value;

    var allNoOfPartsItems = $('#NoOfParts option').size();
    HideAllParts(allNoOfPartsItems);

    for (var i = 1; i <= NoOfPartsSelector; i++) {
      var id = "#Row" + (i);
      if ($(id).length == 0) {
        console.log('create part!')
        $("#ViewingForm").append('<div class="Titled-row" id="Row' + (i) + '">' +
          '<div id=\"RowTitle">' +
          '<h3>Part: ' + (i) + '</h3>' +
          '</div>' +
          '<div class="row">' +
          '' +
          '<div class="column">' +
          '' +
          '<div class="row-in">' +
          '<label class="col-30">IN</label>' +
          '<input type="text" class="col-70 calc" placeholder="HH:MM:SS:FF" id="Row' + (i) + 'IN" pattern="([0-9][0-9]):([0-5][0-9]):([0-5][0-9]):([0-2][0-4])">' +
          '</div>' +
          '<div class="row-in">' +
          '<label class="col-30">OUT</label>' +
          '<input type="text" class="col-70 calc" placeholder="HH:MM:SS:FF" id="Row' + (i) + 'OUT" pattern="([0-9][0-9]):([0-5][0-9]):([0-5][0-9]):([0-2][0-4])">' +
          '</div>' +
          '<div class="row-in">' +
          '<label class="col-30">DUR</label>' +
          '<input type="text" class="col-70" placeholder="HH:MM:SS:FF" id="Row' + (i) + 'DUR" disabled = "disabled" pattern="([0-9][0-9]):([0-5][0-9]):([0-5][0-9]):([0-2][0-4])">' +
          '</div>' +
          '' +
          '</div>' +
          '<div class="column">' +
          '<div class="comments-row">' +
          '<label>Notes</label>' +
          '<textarea rows="4" cols="50" id="Row' + (i) + 'Notes"></textarea>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>');

        //$(id).show();

      } else {
        $(id).show();
      }
      // If the number of parts is more than one
      if (i > 1) {
        //get the out value of the previous part if it is already filled
        var OUTpart = document.getElementById("Row" + (i - 1) + "OUT").value;
        if (OUTpart !== '' && isValidTimeCode(OUTpart, "Row" + (i - 1) + "OUT") === true) {
          // convert it to timecode + 1 frame
          var newOUTpart = frames_to_timecode(timecode_to_frames(OUTpart) + 1);
          $(id + "IN").val(newOUTpart);
        } else {
          $(id + "IN").val("");
          $(id + "DUR").val("");
        }
      }
    }

  });

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

    if (ProgramTitleOption === "Other Programme") {
      $("#ProgTitle").removeAttr('disabled');

    } else {
      $("#ProgTitle").attr('disabled', 'disabled');
    }


  });

  var doc = new jsPDF();
  var specialElementHandlers = {
    '#editor': function(element, renderer) {
      return true;
    }
  };

  $('#SavePDFBtn').click(function() {
    //   doc.addHTML($('#ViewingForm').html(), 15, 15, {
    //     'width': 210,
    //     'elementHandlers': specialElementHandlers
    //   });
    //   doc.save('sample-file.pdf');
    // });
    //
    //
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML($('#ViewingForm'), 5, 5, function() {
      pdf.save('report.pdf');
    });
    //
    //
    //
    //makePDF("ViewingForm");
  });

  $('#sendForm').click(function() {
    if (isValidInputs()) {
      alertify.confirm("Confirm", "Are you sure you want to send the form?",
        function() {
          sendEmail();
          //alertify.success('Yes');
        },
        function() {
          alertify.error('Send Cancelled!');
        });
    }
  });

  $('#PrintFormBtn').click(function() {
    window.print();

  });

  $("#ViewingForm").on('mouseover', '.calc', function() {
    $('.calc').change(function() {
      //console.log(1);
      var sourceID = $(this).attr("id");

      var RowNo = sourceID.substring(0, 4);
      var currentRow = parseInt(RowNo.substr(RowNo.length - 1));
      //console.log(RowNo);

      //$('.calc').each(function() {
      var INpart = document.getElementById(RowNo + "IN").value;
      var OUTpart = document.getElementById(RowNo + "OUT").value;

      //console.log(isValidTimeCode(INpart, RowNo + "IN") === false);
      if (isValidTimeCode(INpart, RowNo + "IN") === false || isValidTimeCode(OUTpart, RowNo + "OUT") === false) {

        if (isValidTimeCode(INpart, RowNo + "IN") === false) {
          document.getElementById("Row" + (currentRow) + "IN").style.borderColor = "red";
        } else {
          document.getElementById("Row" + (currentRow) + "IN").style.borderColor = "white";
        }

        if (isValidTimeCode(OUTpart, RowNo + "OUT") === false) {

          document.getElementById("Row" + (currentRow) + "OUT").style.borderColor = "red";
        } else {
          document.getElementById("Row" + (currentRow) + "OUT").style.borderColor = "white";
        }
      } else {
        document.getElementById("Row" + (currentRow) + "IN").style.borderColor = "white";
        document.getElementById("Row" + (currentRow) + "OUT").style.borderColor = "white";

        var DURpart = CalcDur(INpart, OUTpart);
        if (DURpart === "Invalid Timecodes") {
          $('#' + RowNo + "DUR").val(DURpart);
          document.getElementById(RowNo + "DUR").style.borderColor = "red";
          $("#" + RowNo + "DUR").addClass('input:invalid');

        } else {
          $('#' + RowNo + "DUR").val(DURpart);
          document.getElementById(RowNo + "DUR").style.borderColor = "white";
          $("#" + RowNo + "DUR").removeClass('input:invalid');

        }

      }


      //to be used in setting the value of the timecode of the next part
      var nextRowID = "Row" + (currentRow + 1);
      // Update the number of chosen parts.
      var NoOfParts = document.getElementById("NoOfParts").value;
      if (NoOfParts > 1) {
        if ($("#" + nextRowID).length != 0 && $("#" + nextRowID).is(':visible')) {
          if (OUTpart !== '' && isValidTimeCode(OUTpart, RowNo + "OUT") === true) {
            var newOUTpart = frames_to_timecode(timecode_to_frames(OUTpart) + 1);
            $("#" + nextRowID + "IN").val(newOUTpart);
          } else {
            $("#" + nextRowID + "IN").val("");
            $("#" + nextRowID + "DUR").val("");
            $("#" + RowNo + "DUR").val("");
          }
        }
      } else if (OUTpart === '' || isValidTimeCode(OUTpart, RowNo + "OUT") === false) {
        $("#" + RowNo + "DUR").val("");
      }
      //  });
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

function HideAllParts(allItems) {
  for (var i = 0; i < allItems; i++) {
    var id = "#Row" + (i + 1);
    if ($(id).length != 0) {
      $(id).hide();
    }
  }
}


function isValidTimeCode(timecode, inputID) {
  // test the input value against the Input Pattern Specified.
  return (TimeCodePattern.test(timecode) && document.getElementById(inputID).validity.valid);
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

  var ErrorMsg = "Error: Check the inputs of th efollowing fields: <br />";

  if (ProgTitle === '') {
    isAllValid = false;
    ErrorMsg += "      * Programme Title should not be Empty. <br />";
    alertify.error('Programme Title should not be Empty.');
    document.getElementById("ProgTitle").style.borderColor = "red";
  } else {
    document.getElementById("ProgTitle").style.borderColor = "white";
  }
  if (IngestDate === '') {
    isAllValid = false;
    ErrorMsg += "      * Ingest Date should be chosen. <br />";
    alertify.error('Ingest Date should be chosen.');
    document.getElementById("IngestDate").style.borderColor = "red";
  } else {
    document.getElementById("IngestDate").style.borderColor = "white";
  }
  if (TodayDate === '') {
    isAllValid = false;
    ErrorMsg += "      * Today Date should be chosen. <br />";
    alertify.error('Today Date should be chosen.');
    document.getElementById("TodayDate").style.borderColor = "red";
  } else {
    document.getElementById("TodayDate").style.borderColor = "white";
  }
  if (ContactNo === '') {
    isAllValid = false;
    ErrorMsg += "      * Contact number should not be Empty. <br />";
    alertify.error('Contact number should not be Empty.');

    document.getElementById("ContactNo").style.borderColor = "red";
  } else {
    document.getElementById("ContactNo").style.borderColor = "white";
  }
  if (ProgID === '') {
    isAllValid = false;
    ErrorMsg += "      * Programme ID should not be Empty. <br />";
    alertify.error('Programme ID should not be Empty.');
    document.getElementById("ProgID").style.borderColor = "red";
  } else {
    document.getElementById("ProgID").style.borderColor = "white";
  }
  if (TXDate === '') {
    isAllValid = false;
    ErrorMsg += "      * TX Date should be chosen. <br />";
    alertify.error('TX Date should be chosen.');
    document.getElementById("TXDate").style.borderColor = "red";
  } else {
    document.getElementById("TXDate").style.borderColor = "white";
  }

  // Check the inputs of the parts
  for (var i = 1; i <= NoOfParts; i++) {
    var id = "#Row" + (i);
    if ($(id).length != 0 && $(id).is(':visible')) {
      // If the part exists and not hidden
      var INpart = document.getElementById("Row" + (i) + "IN").value;
      var OUTpart = document.getElementById("Row" + (i) + "OUT").value;
      var DURpart = document.getElementById("Row" + (i) + "DUR").value;
      var Notes = document.getElementById("Row" + (i) + "Notes").value;

      // console.log(isValidTimeCode(OUTpart, "Row" + (i) + "OUT"));
      // console.log(TimeCodePattern.test(OUTpart));
      // console.log(document.getElementById("Row" + (i) + "OUT").validity.valid)
      // //TimeCodePattern.test(OUTpart) && document.getElementById(inputID).validity.valid)

      if (INpart === '') {
        isAllValid = false;
        ErrorMsg += "      * Part " + i + "-IN timecode should not be Empty. <br />";
        alertify.error('Part ' + i + '-IN timecode should not be Empty.');
        document.getElementById("Row" + (i) + "IN").style.borderColor = "red";
      } else if (isValidTimeCode(INpart, "Row" + (i) + "IN") === false) {
        isAllValid = false;
        ErrorMsg += "      * Part " + i + "-IN timecode is invalid <br />";
        alertify.error('Part ' + i + '-IN timecode is invalid.');
        document.getElementById("Row" + (i) + "IN").style.borderColor = "red";
      } else {
        document.getElementById("Row" + (i) + "IN").style.borderColor = "white";
      }
      if (OUTpart === '') {
        isAllValid = false;
        ErrorMsg += "      * Part " + i + "-OUT timecode should not be Empty. <br />";
        alertify.error('Part ' + i + '-OUT timecode should not be Empty.');
        document.getElementById("Row" + (i) + "OUT").style.borderColor = "red";
      } else if (isValidTimeCode(OUTpart, "Row" + (i) + "OUT") === false) {
        isAllValid = false;
        ErrorMsg += "      * Part " + i + "-OUT timecode is invalid <br />";
        alertify.error('Part ' + i + '-OUT timecode is invalid.');
        document.getElementById("Row" + (i) + "OUT").style.borderColor = "red";
      } else {
        document.getElementById("Row" + (i) + "OUT").style.borderColor = "white";
      }

      if (DURpart === '') {
        isAllValid = false;
        ErrorMsg += "      * Part " + i + "-DUR timecode should not be Empty. <br />";
        alertify.error('Part ' + i + '-DUR timecode should not be Empty.');
        document.getElementById("Row" + (i) + "DUR").style.borderColor = "red";
      } else if (isValidTimeCode(OUTpart, "Row" + (i) + "DUR") === false) {
        isAllValid = false;
        ErrorMsg += "      * Part " + i + "-DUR timecode is invalid <br />";
        alertify.error('Part ' + i + '-DUR timecode is invalid.');
        document.getElementById("Row" + (i) + "DUR").style.borderColor = "red";
      } else if (DURpart === "Invalid Timecodes") {
        isAllValid = false;
        alertify.error('Part ' + i + ' OUT-timecode must be greater than the IN-timecode');
        document.getElementById("Row" + (i) + "DUR").style.borderColor = "red";
      } else {
        document.getElementById("Row" + (i) + "DUR").style.borderColor = "white";
      }
    }
  }

  $("#errorMsg").html(ErrorMsg + "</p>");

  // if (isAllValid == false) {
  //   //$("#errorMsgDiv").show().delay(10000).fadeOut();
  // } else {
  return isAllValid;
  //}
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
      //alertify.error('OUT-timecode must be greater than the IN-timecode');
      return "Invalid Timecodes";
    } else {
      return frames_to_timecode(timecode_to_frames(OUTpart) - timecode_to_frames(INpart));
    }
  } else {
    event.value = "";
  }
}
