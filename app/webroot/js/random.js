var random = Math.floor(Math.random() * $('.lugares').length);
$('.lugares').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares1').length);
$('.lugares1').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares2').length);
$('.lugares2').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares3').length);
$('.lugares3').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares4').length);
$('.lugares4').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares5').length);
$('.lugares5').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares6').length);
$('.lugares6').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares7').length);
$('.lugares7').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares8').length);
$('.lugares8').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares9').length);
$('.lugares9').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares10').length);
$('.lugares10').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares11').length);
$('.lugares11').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares12').length);
$('.lugares12').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares13').length);
$('.lugares13').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares14').length);
$('.lugares14').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares15').length);
$('.lugares15').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares16').length);
$('.lugares16').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares17').length);
$('.lugares17').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares18').length);
$('.lugares18').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares19').length);
$('.lugares19').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares20').length);
$('.lugares20').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares21').length);
$('.lugares21').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares22').length);
$('.lugares22').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares23').length);
$('.lugares23').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares24').length);
$('.lugares24').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares25').length);
$('.lugares25').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares26').length);
$('.lugares26').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares27').length);
$('.lugares27').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares28').length);
$('.lugares28').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares29').length);
$('.lugares29').addClass("esconder").eq(random).addClass("mostrar");

var random = Math.floor(Math.random() * $('.lugares30').length);
$('.lugares30').addClass("esconder").eq(random).addClass("mostrar");

$(".loader-container").hide();

 setTimeout(function () {
 $(".loader-full").fadeOut('slow');
 }, 1000);

$(".cambio").click(function () {
    if($(".disponible").hasClass("mostrar")){
        $(".loader-container").show();
        setTimeout(function () {            
            $(".loader-container").hide();
            $(".disponible").addClass("esconder");
            $(".disponible").removeClass("mostrar");
            $(".ocupado").addClass("mostrar");
            $(".ocupado").removeClass("esconder");
        	alert("Lugar Separado");
        }, 3000);
    } else if ($(".ocupado").hasClass("mostrar")) {
        alert("Lugar no disponible");
    }
});

$(".cambio1").click(function () {
	if ($(".disponible1").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible1").addClass("esconder");
			$(".disponible1").removeClass("mostrar");
			$(".ocupado1").addClass("mostrar");
			$(".ocupado1").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado1").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio2").click(function () {
	if ($(".disponible2").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible2").addClass("esconder");
			$(".disponible2").removeClass("mostrar");
			$(".ocupado2").addClass("mostrar");
			$(".ocupado2").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado2").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio3").click(function () {
	if ($(".disponible3").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible3").addClass("esconder");
			$(".disponible3").removeClass("mostrar");
			$(".ocupado3").addClass("mostrar");
			$(".ocupado3").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado3").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio4").click(function () {
	if ($(".disponible4").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible4").addClass("esconder");
			$(".disponible4").removeClass("mostrar");
			$(".ocupado4").addClass("mostrar");
			$(".ocupado4").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado4").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio5").click(function () {
	if ($(".disponible5").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible5").addClass("esconder");
			$(".disponible5").removeClass("mostrar");
			$(".ocupado5").addClass("mostrar");
			$(".ocupado5").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado5").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio6").click(function () {
	if ($(".disponible6").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible6").addClass("esconder");
			$(".disponible6").removeClass("mostrar");
			$(".ocupado6").addClass("mostrar");
			$(".ocupado6").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado6").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio7").click(function () {
	if ($(".disponible7").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible7").addClass("esconder");
			$(".disponible7").removeClass("mostrar");
			$(".ocupado7").addClass("mostrar");
			$(".ocupado7").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado7").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});

$(".cambio8").click(function () {
	if ($(".disponible8").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible8").addClass("esconder");
			$(".disponible8").removeClass("mostrar");
			$(".ocupado8").addClass("mostrar");
			$(".ocupado8").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado8").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio9").click(function () {
	if ($(".disponible9").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible9").addClass("esconder");
			$(".disponible9").removeClass("mostrar");
			$(".ocupado9").addClass("mostrar");
			$(".ocupado9").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado9").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio10").click(function () {
	if ($(".disponible10").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible10").addClass("esconder");
			$(".disponible10").removeClass("mostrar");
			$(".ocupado10").addClass("mostrar");
			$(".ocupado10").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado10").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio11").click(function () {
	if ($(".disponible11").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible11").addClass("esconder");
			$(".disponible11").removeClass("mostrar");
			$(".ocupado11").addClass("mostrar");
			$(".ocupado11").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado11").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio12").click(function () {
	if ($(".disponible12").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible12").addClass("esconder");
			$(".disponible12").removeClass("mostrar");
			$(".ocupado12").addClass("mostrar");
			$(".ocupado12").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado12").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio13").click(function () {
	if ($(".disponible13").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible13").addClass("esconder");
			$(".disponible13").removeClass("mostrar");
			$(".ocupado13").addClass("mostrar");
			$(".ocupado13").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado13").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio14").click(function () {
	if ($(".disponible14").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible14").addClass("esconder");
			$(".disponible14").removeClass("mostrar");
			$(".ocupado14").addClass("mostrar");
			$(".ocupado14").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado14").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});

$(".cambio15").click(function () {
	if ($(".disponible15").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible15").addClass("esconder");
			$(".disponible15").removeClass("mostrar");
			$(".ocupado15").addClass("mostrar");
			$(".ocupado15").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado15").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio16").click(function () {
	if ($(".disponible16").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible16").addClass("esconder");
			$(".disponible16").removeClass("mostrar");
			$(".ocupado16").addClass("mostrar");
			$(".ocupado16").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado16").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio17").click(function () {
	if ($(".disponible17").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible17").addClass("esconder");
			$(".disponible17").removeClass("mostrar");
			$(".ocupado17").addClass("mostrar");
			$(".ocupado17").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado17").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio18").click(function () {
	if ($(".disponible18").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible18").addClass("esconder");
			$(".disponible18").removeClass("mostrar");
			$(".ocupado18").addClass("mostrar");
			$(".ocupado18").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado18").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio19").click(function () {
	if ($(".disponible19").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible19").addClass("esconder");
			$(".disponible19").removeClass("mostrar");
			$(".ocupado19").addClass("mostrar");
			$(".ocupado19").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado19").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio20").click(function () {
	if ($(".disponible20").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible20").addClass("esconder");
			$(".disponible20").removeClass("mostrar");
			$(".ocupado20").addClass("mostrar");
			$(".ocupado20").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado20").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio21").click(function () {
	if ($(".disponible21").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible21").addClass("esconder");
			$(".disponible21").removeClass("mostrar");
			$(".ocupado21").addClass("mostrar");
			$(".ocupado21").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado21").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio22").click(function () {
	if ($(".disponible22").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible22").addClass("esconder");
			$(".disponible22").removeClass("mostrar");
			$(".ocupado22").addClass("mostrar");
			$(".ocupado22").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado22").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio23").click(function () {
	if ($(".disponible23").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible23").addClass("esconder");
			$(".disponible23").removeClass("mostrar");
			$(".ocupado23").addClass("mostrar");
			$(".ocupado23").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado23").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio24").click(function () {
	if ($(".disponible24").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible24").addClass("esconder");
			$(".disponible24").removeClass("mostrar");
			$(".ocupado24").addClass("mostrar");
			$(".ocupado24").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado24").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio25").click(function () {
	if ($(".disponible25").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible25").addClass("esconder");
			$(".disponible25").removeClass("mostrar");
			$(".ocupado25").addClass("mostrar");
			$(".ocupado25").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado25").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio26").click(function () {
	if ($(".disponible26").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible26").addClass("esconder");
			$(".disponible26").removeClass("mostrar");
			$(".ocupado26").addClass("mostrar");
			$(".ocupado26").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado26").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio27").click(function () {
if ($(".disponible27").hasClass("mostrar")) {
	$(".loader-container").show();
	setTimeout(function () {
		$(".loader-container").hide();
		$(".disponible27").addClass("esconder");
		$(".disponible27").removeClass("mostrar");
		$(".ocupado27").addClass("mostrar");
		$(".ocupado27").removeClass("esconder");
		alert("Lugar Separado");
	}, 3000);
} else if ($(".ocupado27").hasClass("mostrar")) {
	alert("Lugar no disponible");
}
});
$(".cambio28").click(function () {
	if ($(".disponible28").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible28").addClass("esconder");
			$(".disponible28").removeClass("mostrar");
			$(".ocupado28").addClass("mostrar");
			$(".ocupado28").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado28").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio29").click(function () {
	if ($(".disponible29").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible29").addClass("esconder");
			$(".disponible29").removeClass("mostrar");
			$(".ocupado29").addClass("mostrar");
			$(".ocupado29").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado29").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});
$(".cambio30").click(function () {
	if ($(".disponible30").hasClass("mostrar")) {
		$(".loader-container").show();
		setTimeout(function () {
			$(".loader-container").hide();
			$(".disponible30").addClass("esconder");
			$(".disponible30").removeClass("mostrar");
			$(".ocupado30").addClass("mostrar");
			$(".ocupado30").removeClass("esconder");
			alert("Lugar Separado");
		}, 3000);
	} else if ($(".ocupado30").hasClass("mostrar")) {
		alert("Lugar no disponible");
	}
});