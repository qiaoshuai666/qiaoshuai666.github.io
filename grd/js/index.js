$(function() {
	//全屏滚动
	fullScreenScroll();
	// 技能明细切换
	skillChange();
	//图片轮播
	imgArousel();
	//立方体旋转
	//	cubeRotate();
	//文本切换
	textChange();
})
var myIndex=1;
//全屏滚动
function fullScreenScroll() {
	$('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
		verticalCentered: false,
		afterRender: function() {
			$("#home").css({
				"display": "block"
			}).addClass("home_zoom");
			$("header").before("<div id='header' style='opacity:0'></div>");
			$("#home_head").css({
				"margin-top": "100px"
			});
			$("header").animate({
				opacity: "1"
			}, 1000, function() {
				$("#header").css({
					"opacity": "0.3"
				});
				$("#home_info1").fadeIn(700, function() {
					$(this).next().animate({
						width: "800px"
					}, 700, function() {
						$("#home_info2").fadeIn(450, function() {
							$(this).next().fadeIn(450, function() {
								$(this).next().fadeIn(450, function() {
									$(this).next().fadeIn(450, function() {});
								});
							});
						});
					});
				});
			});
			$("#menu li").addClass("hvr-sweep-to-bottom");
		},	
		afterLoad: function(anchorLink, index) {
			myIndex=index;
//			console.log(myIndex)
			if (index == 1) {
				$("#menu li").eq(0).addClass("active").siblings().removeClass("active");
				$("#menu li").eq(0).removeClass("menu_active");
			}
			if (index == 2) {
				$("#menu li").eq(1).addClass("active").siblings().removeClass("active");
				$("#menu li").eq(0).removeClass("menu_active");
				$("#about_content h1").after("<div class='title_en'><h2></h2></div>");
				$(".title_en").animate({
					width: "130px"
				}, 800, function() {
					$(".title_en h2").slideDown(400);
				});
				$("#about_info").animate({
					width: "800px",
					marginTop: "0",
					marginBottom: "0"
				}, 700, 'easeOutElastic', function() {
					$("#about_info p").eq(0).animate({
						bottom: "0"
					}, 700, function() {
						$("#about_info p").eq(1).animate({
							bottom: "0"
						}, 700, function() {
							$("#about_info p").eq(2).animate({
								bottom: "0"
							}, 700, function() {
								$("#about_info p").eq(3).animate({
									bottom: "0"
								}, 700);
							});
						});
					});
				});
			}
			if (index == 3) {
				$("#menu li").eq(2).addClass("active").siblings().removeClass("active");
				$("#menu li").eq(0).removeClass("menu_active");
				$("#skill_content h1").after("<div class='title_en'><h2></h2></div>");
				$(".title_en").animate({
					width: "130px"
				}, 800, function() {
					$(".title_en h2").slideDown(400);
				});
				$(".skill_list_content").addClass("skill_scale");
			}
			if (index == 4) {
				$("#menu li").eq(3).addClass("active").siblings().removeClass("active");
				$("#menu li").eq(0).removeClass("menu_active");
				$("#exp_content h1").after("<div class='title_en'><h2></h2></div>");
				$(".title_en").animate({
					width: "130px"
				}, 800, function() {
					$(".title_en h2").slideDown(400);
				});
				var i = -1;
				$(".exp_scale").each(function() {
					var $this = $(this);
					if (!$this.hasClass("b_to_t")) {
						i++;
						setTimeout(function() {
							$this.addClass("b_to_t");
						}, 200 * i);
					}
				});
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300, 0.3);
			}
			if (index == 5) {
				$("#menu li").eq(4).addClass("active").siblings().removeClass("active");
				$("#menu li").eq(0).removeClass("menu_active");
				$("#demo_content h1").after("<div class='title_en'><h2></h2></div>");
				$(".title_en").animate({
					width: "130px"
				}, 800, function() {
					$(".title_en h2").slideDown(400);
				});
				var i = -1;
				$(".demo_scale").each(function() {
					var $this = $(this);
					if (!$this.hasClass("b_to_t")) {
						i++;
						setTimeout(function() {
							$this.addClass("b_to_t");
						}, 200 * i);
					}
				})
			}
			if (index == 6) {
				$("#menu li").eq(5).addClass("active").siblings().removeClass("active");
				$("#menu li").eq(0).removeClass("menu_active ");
				$("#contact_content h1").after("<div class='title_en'><h2>·欢迎致电 ·</h2></div>");
				$(".title_en").animate({
					width: "130px"
				}, 800, function() {
					$(".title_en h2").slideDown(400);
				});
				var i = -1;
				$("#contact_head1").addClass("b_to_t");
				$("#contact_head2 span").each(function() {
					var $this = $(this);
					if (!$this.hasClass("fade_in")) {
						i++;
						setTimeout(function() {
							$this.addClass("fade_in");
						}, 200 * i);
					}
				});
				var j = -1;
				setTimeout(function() {
					$(".contact_scale").each(function() {
						var $this = $(this);
						if (!$this.hasClass("fade_in")) {
							j++;
							setTimeout(function() {
								$this.addClass("fade_in");
							}, 350 * j);
						}
					});
				}, 70);
			}
		},
		onLeave: function(index) {
			if (index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
				$(".title_en").remove();
			}
		}
	});
	mouse ();
}
function mouse (){
	$("#menu li a").hover(function(){
		$("#menu li").removeClass("active");
	},function(){
		$("#menu li").removeClass("active")
		$("#menu li").eq(myIndex-1).addClass("active");
	})
}

//顶部标题文字切换
//function titleChange() {
//	$("#header_p").mouseover(function() {
//		$("#header_p1").html("Resume");
//		$("#header_p2").html("前端工程师");
//	}).mouseout(function() {
//		$("#header_p1").html("F2E");
//		$("#header_p2").html("个人简历");
//	});
//}

//技能明细切换
function skillChange() {
	$(".skill_icon").mouseover(function() {
		$(this).next().next().slideDown(200);
	})
	$(".skill_icon").mouseout(function() {
		$(this).next().next().slideUp(200);
	})
}
// 技能明细切换
//function skillChange() {
//	$(".skill_icon").click(function() {
//		$(".skill_int").each(function() {
//			if ($(this).is(":visible")) {
//				$(this).slideUp(200);
//				$(this).prev().removeClass("skill_flag_scale");
//			}
//		});
//		if ($(this).siblings(".skill_int").is(":hidden")) {
//			$(this).siblings(".skill_int").slideDown(400);
//			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
//		} else {
//			$(this).siblings(".skill_int").slideUp(200);
//			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
//		}
//	});
//}

//图片轮播
function imgArousel() {
	var $banner = $('#exp_list_slider');
	var $banner_ul = $('#exp_list_content');
	var $btn = $('#exp_list_to');
	var $btn_a = $btn.find('div');
	var v_width = $banner.width();

	var page = 1;

	var timer = null;
	var btnClass = null;

	var page_count = $banner_ul.find('.exp_list').length;

	$banner_ul.width(page_count * v_width);

	function move(obj, classname) {
		//手动及自动播放
		if (!$banner_ul.is(':animated')) {
			if (classname == 'exp_list_toleft') {
				if (page == 1) {
					$banner_ul.animate({
						left: -v_width * (page_count - 1)
					});
					page = page_count;
					cirMove();
				} else {
					$banner_ul.animate({
							left: '+=' + v_width
						},
						"slow");
					page--;
					cirMove();
				}
			} else {
				if (page == page_count) {
					$banner_ul.animate({
						left: 0
					});
					page = 1;
					cirMove();
				} else {
					$banner_ul.animate({
							left: '-=' + v_width
						},
						"slow");
					page++;
					cirMove();
				}
			}
		}
	}

	function cirMove() {
		//检测page的值，使当前的page与selected的小圆点一致
		$('.banner-circle a').eq(page - 1).addClass('exp_active').siblings().removeClass('exp_active');
	}
	$banner.mouseover(function() {
		$btn.css({
			'display': 'block'
		});
		clearInterval(timer);
	}).mouseout(function() {
		$btn.css({
			'display': 'none'
		});
		clearInterval(timer);
		timer = setInterval(move, 2000);
	}).trigger("mouseout"); //激活自动播放
	$btn_a.mouseover(function() {
		//实现透明渐变，阻止冒泡
		$(this).animate({
				opacity: 1
			},
			'fast');
		$btn.css({
			'display': 'block'
		});
		return false;
	}).mouseleave(function() {
		$(this).animate({
				opacity: 1
			},
			'fast');
		$btn.css({
			'display': 'none'
		});
		return false;
	}).click(function() {
		//手动点击清除计时器
		btnClass = this.className;
		clearInterval(timer);
		timer = setInterval(move, 2000);
		move($(this), this.className);
	});

	$('.banner-circle a').on('click', function() {
		var index = $('.banner-circle a').index(this);
		$banner_ul.animate({
				left: -v_width * index
			},
			'slow');
		page = index + 1;
		cirMove();
	});
}

// 时光轴
var x = 10;
var y = 20;
$("#exp_timeline a").mouseover(function(e) {
	this.aa = this.title;
	this.title = "";
	$("body").append("<div class='exp_timeline_title'>" + this.aa + "</div>");
	$(".exp_timeline_title").css({
		"top": e.pageY + y + "px",
		"left": e.pageX + x + "px"
	}).show("fast");
}).mouseout(function() {
	this.title = this.aa;
	$(".exp_timeline_title").remove();
}).mousemove(function(e) {
	$(".exp_timeline_title").css({
		"top": e.pageY + y + "px",
		"left": e.pageX + x + "px"
	});
}).click(function() {
	return false;
});

// 点击留言
$("#contact_message1").click(function() {
	$(this).fadeOut(200, function() {
		$("#contact_form").fadeIn(200);
	})
});

//内容适应居中
$(function() {
	$("#home_content").css({
		"padding-top": ($(".active").height() - $("#home_content").height()) / 6
	});
	$("#about_content").css({
		"padding-top": ($(".active").height() - $("#about_content").height()) / 6
	});
	$("#skill_content").css({
		"padding-top": ($(".active").height() - $("#skill_content").height()) / 6
	});
	$("#exp_content").css({
		"padding-top": ($(".active").height() - $("#exp_content").height()) / 6
	});
	$("#demo_content").css({
		"padding-top": ($(".active").height() - $("#demo_content").height()) / 6
	});
});

//立方体旋转
//function cubeRotate() {
//	var oBox = document.getElementById('home_head');
//	var y = -80;
//	var x = 60;
//	oBox.onmousedown = function(ev) {
//		var oEvent = ev || event;
//		var disX = oEvent.clientX - y;
//		var disY = oEvent.clientY - x;
//		document.onmousemove = function(ev) {
//			var oEvent = ev || event;
//			x = oEvent.clientY - disY;
//			y = oEvent.clientX - disX;
//			oBox.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
//		};
//		document.onmouseup = function() {
//			document.onmousemove = null;
//			document.onmouseup = null;
//		};
//		return false;
//	};
//}

//关于我文本切换
function textChange() {
	$('.about_list_eg img').rotate({
		bind: {
			mouseover: function() {
				$(this).rotate({
					animateTo: 360
				});
				$(this).parent().next().next().show();
				$(this).parent().next().hide();

			},
			mouseout: function() {
				$(this).rotate({
					animateTo: 0
				});
				$(this).parent().next().next().hide();
				$(this).parent().next().show();

			}
		}
	});
}

//	$("#menu2 li a").wrapInner('<span class="out"></span>');
//	$("#menu2 li a").each(function() {
//		$('<span class="over">' + $(this).text() + '</span>').appendTo(this);
//	});
//
//	$("#menu2 li a").hover(function() {
//		$(".out", this).stop().animate({
//			'top': '70px'
//		}, 300); // move down - hide
//		$(".over", this).stop().animate({
//			'top': '0px'
//		}, 300); // move down - show
//
//	}, function() {
//		$(".out", this).stop().animate({
//			'top': '0px'
//		}, 300); // move up - show
//		$(".over", this).stop().animate({
//			'top': '70px'
//		}, 300); // move up - hide
//	});