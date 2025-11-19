$(function () {
  let to_up = $(".toUp");
  let rootColor = $(":root");

  let gamesCSharp = $(".g_cSharp");
  let gamesCpp = $(".g_cPlusPlus");
  let gamesPy = $(".g_python");
  let gamesJava = $(".g_java");
  let gamesJavascript = $(".g_javascript");
  let game_cSharpSelected = $(".g_cSharpSelected");
  let game_cPlusPlusSelected = $(".g_cPlusPlusSelected");
  let game_pythonSelected = $(".g_pythonSelected");
  let game_javaSelected = $(".g_javaSelected");
  let game_javascriptSelected = $(".g_javascriptSelected");
  
  let nav_webSection = $(".nav-webSection");
  let nav_mobileSection = $(".nav-mobileSection");
  let nav_desktopSection = $(".nav-desktopSection");
  let nav_databaseSection = $(".nav-databaseSection");
  let nav_gamesSection = $(".nav-gamesSection");
  let nav_systemSection = $(".nav-systemSection");
  let nav_machineSection = $(".nav-machineSection");

  // ========== Start side Menu Section =================== //
  let side_menu = $(".sideMenu");
  let sideMenu_Show = $("#sideMenuShow");
  let sideMenuItem = $(".sideMenu_item");
  let sub_items = $(".sideMenu_subItems");

  let webSection = document.getElementById("webSection");
  let webSectionTop = webSection.offsetTop;

  let mobileSection = document.getElementById("mobileSection");
  let mobileSectionTop = mobileSection.offsetTop;

  let desktopSection = document.getElementById("desktopSection");
  let desktopSectionTop = desktopSection.offsetTop;

  let databaseSection = document.getElementById("databaseSection");
  let databaseSectionTop = databaseSection.offsetTop;

  let gamesSection = document.getElementById("gamesSection");
  let gamesSectionTop = gamesSection.offsetTop;
  
  let systemSection = document.getElementById("systemSection");
  let systemSectionTop = systemSection.offsetTop;

  let machineSection = document.getElementById("machineSection");
  let machineSectionTop = machineSection.offsetTop;

  sideMenu_Show.click(function () {
    side_menu.animate({ right: "0px" }, 200);
    // $(".fullOverrideBlack").css("opacity", "1");
    $(this).hide();
    $("html, body").css("overflow", "hidden");
  });

  $(".mobileMenuIcon").click(function () {
    side_menu.animate({ right: "0px" }, 200);
    $(this).css("visibility", "hidden");
    $("html, body").css("overflow", "hidden");
  });
  
  $("#sideMenuHeader_close").click(function () {
    side_menu.animate({ right: "-100%" }, 200);
    $(".mobileMenuIcon").css("visibility", "visible");
    sub_items.slideUp();
    // $(".fullOverrideBlack").css("opacity", "0");
    sideMenu_Show.show();
    $("html, body").css("overflow", "auto");
  });

  sideMenuItem.click(function () {
    const this_title = $(this);
    const this_content = this_title.find(sub_items);
    this_content.slideToggle();
    sub_items.not(this_content).slideUp();
  });
  // =========== End Slide Bar Menu Section ============================== //

  // ==================== Start Color Theme Section ========================== //
  // $(".colorStyleIcon").click(function () {});
  
  $(".colorStyleIcon").click(function () {
    $("#testStyle").slideToggle(200);
  });

  $(".Default").click(function () {
    rootColor.css("--main-color", "#1987af");
    $(":root").css("--main-txt-color", "#fff");
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".Red").click(function () {
    rootColor.css("--main-color", "#900000");
    rootColor.css("--main-txt-color", "#fff");
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".Green").click(function () {
    rootColor.css("--main-color", "#198754");
    rootColor.css("--main-txt-color", "#fff");
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".Gold").click(function () {
    rootColor.css("--main-color", "#FFD700");
    rootColor.css("--main-txt-color", "#000");
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".Black").click(function () {
    rootColor.css("--main-color", "#000");
    rootColor.css("--main-txt-color", "#fff");
    $(this).addClass("selected").siblings().removeClass("selected");
    to_up.css("box-shadow", " 0 0 4px 1px #fff");
    $(".fa-angle-up").css("color", "#fff");
    $(".hvr-sweep-to-top:before").css("background", "#000");
  });

  $(".Orange").click(function () {
    rootColor.css("--main-color", "#dd6d00");
    rootColor.css("--main-txt-color", "#fff");
    $(this).addClass("selected").siblings().removeClass("selected");

    
  });

  $(".Purple").click(function () {
    rootColor.css("--main-color", "#c200c2");
    rootColor.css("--main-txt-color", "#fff");
    $(this).addClass("selected").siblings().removeClass("selected");
  });
  // ================================================= End Color Theme Section ================================================= //

$('.navLi').click(function () {
  $(this).addClass("activeR").siblings().removeClass("activeR");
});
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 800) {
      to_up.css("right", "20px");
    } else {
      to_up.css("right", "-42px");
    }
  });

  // ================================================= Start Back up to top button Section ================================================= //
  // to_up.click(function () {
  //   // $("html, body").animate({ scrollTop: 0 });
  //   alert('ji');
  // });
const beforeSection = 80;
  nav_webSection.click(function (){
    $("html, body").animate({ scrollTop: webSectionTop - beforeSection});
  });

  nav_mobileSection.click(function (){
    $("html, body").animate({ scrollTop: mobileSectionTop - beforeSection});
  });

  nav_desktopSection.click(function (){
    $("html, body").animate({ scrollTop: desktopSectionTop - beforeSection });
  });

  nav_databaseSection.click(function (){
    $("html, body").animate({ scrollTop: databaseSectionTop - beforeSection + 50});
  });

  nav_gamesSection.click(function (){
    $("html, body").animate({ scrollTop: gamesSectionTop - beforeSection - 20});
  });
  
  nav_systemSection.click(function (){
    $("html, body").animate({ scrollTop: systemSectionTop - beforeSection });
  });

  nav_machineSection.click(function (){
    $("html, body").animate({ scrollTop: machineSectionTop - beforeSection });
  });

  $(window).scroll(function () {
    let navCustom = $(".navCustom")
    // console.log(window.scrollY);
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() >= 100) {
      // $(".navCustom").css("position", "fixed");
      navCustom.css("box-shadow","0 1px 5px #555");
      navCustom.css("background-color","#fff");
    }
    else {
        // $(".navCustom").css("position", "relative");
      navCustom.css("box-shadow","none");
      navCustom.css("background-color","#a1cadd");
        $('.home').addClass("activeR").siblings().removeClass("activeR");
      }

      //>>>> Home section active
      if ($(this).scrollTop() < 2220) {
        $('.home').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_web').css("opacity", "1");
      } 
      //>>>> Web section active
      else if (($(this).scrollTop() >= 2220) && ($(this).scrollTop() < 3525)) {
        $('.webActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_web').css("opacity", "0");
        $('.overBlack_web').css("z-index", "-1");
        $('.overBlack_mobile').css("opacity", "1");
      } 
      //>>>> Mobile section active
      else if (($(this).scrollTop() >= mobileSectionTop - 200) && ($(this).scrollTop() < 4695)) {
        $('.mobileActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_mobile').css("opacity", "0");
        $('.overBlack_mobile').css("z-index", "-1");
        $('.overBlack_desktop').css("opacity", "1");
      } 
      //>>>> Desktop section active
      else if (($(this).scrollTop() >= 4765) && ($(this).scrollTop() < 6500)) {
        $('.desktopActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_desktop').css("opacity", "0");
        $('.overBlack_desktop').css("z-index", "-1");
        $('.overBlack_database').css("opacity", "1");
      }
      //>>>> Database section active
      else if (($(this).scrollTop() >= 6500) && ($(this).scrollTop() < 7250)) {
        $('.databaseActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_database').css("opacity", "0");
        $('.overBlack_database').css("z-index", "-1");
        $('.overBlack_games').css("opacity", "1");
      }
      //>>>> Games section active
      else if (($(this).scrollTop() >= 7250) && ($(this).scrollTop() < 7870)) {
        $('.gamesActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_games').css("opacity", "0");
        $('.overBlack_games').css("z-index", "-1");
        $('.overBlack_systemAndNetwork').css("opacity", "1");
      }

      //>>>> System and Network section active
      else if (($(this).scrollTop() >= 7870) && ($(this).scrollTop() < 9675)) {
        $('.systemActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_systemAndNetwork').css("opacity", "0");
        $('.overBlack_systemAndNetwork').css("z-index", "-1");
        $('.overBlack_machine').css("opacity", "1");
      }

      //>>>> Machine section active
      else if (($(this).scrollTop() >= 9675)) {
        $('.machineActive').addClass("activeR").siblings().removeClass("activeR");
        $('.overBlack_machine').css("opacity", "0");
        $('.overBlack_machine').css("z-index", "-1");
      }

    });
    // ========== End Back up to top button Section =============== //

    // ========== Start Games function section ============ //
    let showGame = false;

    function scrollGamesIncrement(){
      if (showGame === false){
        $("html, body").animate({ scrollTop: $(this).scrollTop() + 150 });
        showGame = true;
      }
      else{
        $("html, body").animate({ scrollTop: gamesSectionTop - beforeSection - 20});
        showGame = false;
      }
    }
    gamesCSharp.click(function (){
        game_cSharpSelected.slideToggle(300).siblings().slideUp();
        scrollGamesIncrement();
    })

    gamesCpp.click(function (){
      game_cPlusPlusSelected.slideToggle(300).siblings().slideUp();
      scrollGamesIncrement();
    })

    gamesPy.click(function (){
      game_pythonSelected.slideToggle(300).siblings().slideUp();
      scrollGamesIncrement();
    })

    gamesJava.click(function (){
      game_javaSelected.slideToggle(300).siblings().slideUp();
      scrollGamesIncrement();
    })

    gamesJavascript.click(function (){
      game_javascriptSelected.slideToggle(300).siblings().slideUp();
      scrollGamesIncrement();
    })
    // ================================================= End Games function section ================================================= //


















    // ================================================= End Java Script File ================================================= //
  });


  // console.log(mobileSection.offsetTop);
  // let scrollValue = window.scrollY;
  // window.onscroll = function(){
  //   console.log(scrollValue);
  // }
