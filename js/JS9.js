var input = document.getElementById("userinput");
const html = document.getElementsByTagName('html');
const select = document.getElementById("select-1");
const option = document.getElementsByTagName("option");
const harp = document.getElementsByClassName("harp");

function ly() {
	console.log(select.value)
	// select.value = "harp" && select.value != "piano" && select.value != "ac-guitar" ? console.log("Select.value works!!") : null;
	
}


const array = [
	[			document.querySelector("#min1"),
				document.querySelector("#min2"),
				document.querySelector("#min3"),
				document.querySelector("#min4"),
				document.querySelector("#min5"),
				document.querySelector("#min6"),
				document.querySelector("#min7"),
				document.querySelector("#min8"),
				document.querySelector("#min9"),
				document.querySelector("#min10"),
				document.querySelector("#min11"),
				document.querySelector("#min12"),
				document.querySelector("#min13"),
				document.querySelector("#min14"),
				document.querySelector("#min15"),
				document.querySelector("#min16"),
				document.querySelector("#min17"),
				document.querySelector("#min18"),
				document.querySelector("#min19"),
				document.querySelector("#min20"),
	],
	[			document.querySelector("#Harpmin1"),
				document.querySelector("#Harpmin2"),
				document.querySelector("#Harpmin3"),
				document.querySelector("#Harpmin4"),
				document.querySelector("#Harpmin5"),
				document.querySelector("#Harpmin6"),
				document.querySelector("#Harpmin7"),
				document.querySelector("#Harpmin8"),
				document.querySelector("#Harpmin9"),
				document.querySelector("#Harpmin10"),
				document.querySelector("#Harpmin11"),
				document.querySelector("#Harpmin12"),
				document.querySelector("#Harpmin13"),
				document.querySelector("#Harpmin14"),
				document.querySelector("#Harpmin15"),
				document.querySelector("#Harpmin16"),
				document.querySelector("#Harpmin17"),
				document.querySelector("#Harpmin18"),
				document.querySelector("#Harpmin19"),
				document.querySelector("#Harpmin20"),
	],

	[			document.querySelector("#Guitmin1"),
				document.querySelector("#Guitmin2"),
				document.querySelector("#Guitmin3"),
				document.querySelector("#Guitmin4"),
				document.querySelector("#Guitmin5"),
				document.querySelector("#Guitmin6"),
				document.querySelector("#Guitmin7"),
				document.querySelector("#Guitmin8"),
				document.querySelector("#Guitmin9"),
				document.querySelector("#Guitmin10"),
				document.querySelector("#Guitmin11"),
				document.querySelector("#Guitmin12"),
				document.querySelector("#Guitmin13"),
				document.querySelector("#Guitmin14"),
				document.querySelector("#Guitmin15"),
				document.querySelector("#Guitmin16"),
				document.querySelector("#Guitmin17"),
				document.querySelector("#Guitmin18"),
				document.querySelector("#Guitmin19"),
				document.querySelector("#Guitmin20"),
	],			
];
const array2 = [
	[			document.querySelector("#maj1"),
				document.querySelector("#maj2"),
				document.querySelector("#maj3"),
				document.querySelector("#maj4"),
				document.querySelector("#maj5"),
				document.querySelector("#maj6"),
				document.querySelector("#maj7"),
				document.querySelector("#maj8"),
				document.querySelector("#maj9"),
				document.querySelector("#maj10"),
				document.querySelector("#maj11"),
				document.querySelector("#maj12"),
				document.querySelector("#maj13"),
				document.querySelector("#maj14"),
				document.querySelector("#maj15"),
				document.querySelector("#maj16"),
				document.querySelector("#maj17"),
				document.querySelector("#maj18"),
				document.querySelector("#maj19"),
				document.querySelector("#maj20"),
				document.querySelector("#maj21"),
				document.querySelector("#maj22"),
				document.querySelector("#maj23"),
				document.querySelector("#maj24"),
				document.querySelector("#maj25"),
				document.querySelector("#maj26"),
				document.querySelector("#maj27"),
				document.querySelector("#maj28"),
				document.querySelector("#maj29"),
	],
	[			document.querySelector("#Harpmaj1"),
				document.querySelector("#Harpmaj2"),
				document.querySelector("#Harpmaj3"),
				document.querySelector("#Harpmaj4"),
				document.querySelector("#Harpmaj5"),
				document.querySelector("#Harpmaj6"),
				document.querySelector("#Harpmaj7"),
				document.querySelector("#Harpmaj8"),
				document.querySelector("#Harpmaj9"),
				document.querySelector("#Harpmaj10"),
				document.querySelector("#Harpmaj11"),
				document.querySelector("#Harpmaj12"),
				document.querySelector("#Harpmaj13"),
				document.querySelector("#Harpmaj14"),
				document.querySelector("#Harpmaj15"),
				document.querySelector("#Harpmaj16"),
				document.querySelector("#Harpmaj17"),
				document.querySelector("#Harpmaj18"),
				document.querySelector("#Harpmaj19"),
				document.querySelector("#Harpmaj20"),
				document.querySelector("#Harpmaj21"),
				document.querySelector("#Harpmaj22"),
				document.querySelector("#Harpmaj23"),
				document.querySelector("#Harpmaj24"),
				document.querySelector("#Harpmaj25"),
				document.querySelector("#Harpmaj26"),
				document.querySelector("#Harpmaj27"),
				document.querySelector("#Harpmaj28"),
				document.querySelector("#Harpmaj29"),
	],
	[			document.querySelector("#Guitmaj1"),
				document.querySelector("#Guitmaj2"),
				document.querySelector("#Guitmaj3"),
				document.querySelector("#Guitmaj4"),
				document.querySelector("#Guitmaj5"),
				document.querySelector("#Guitmaj6"),
				document.querySelector("#Guitmaj7"),
				document.querySelector("#Guitmaj8"),
				document.querySelector("#Guitmaj9"),
				document.querySelector("#Guitmaj10"),
				document.querySelector("#Guitmaj11"),
				document.querySelector("#Guitmaj12"),
				document.querySelector("#Guitmaj13"),
				document.querySelector("#Guitmaj14"),
				document.querySelector("#Guitmaj15"),
				document.querySelector("#Guitmaj16"),
				document.querySelector("#Guitmaj17"),
				document.querySelector("#Guitmaj18"),
				document.querySelector("#Guitmaj19"),
				document.querySelector("#Guitmaj20"),
				document.querySelector("#Guitmaj21"),
				document.querySelector("#Guitmaj22"),
				document.querySelector("#Guitmaj23"),
				document.querySelector("#Guitmaj24"),
				document.querySelector("#Guitmaj25"),
				document.querySelector("#Guitmaj26"),
				document.querySelector("#Guitmaj27"),
				document.querySelector("#Guitmaj28"),
				document.querySelector("#Guitmaj29"),
	],
];






function playSound() {
	if (select.value === "piano") {
		var sfx = array[0][0];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][0];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][0];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound1() {
	if (select.value === "piano") {
		var sfx = array[0][1];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][1];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][1];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound2() {
	if (select.value === "piano") {
		var sfx = array[0][2];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][2];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][2];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound3() {
	if (select.value === "piano") {
		var sfx = array[0][3];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][3];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][3];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound4() {
	if (select.value === "piano") {
		var sfx = array[0][4];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][4];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][4];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound5() {
	if (select.value === "piano") {
		var sfx = array[0][5];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][5];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][5];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound6() {
	if (select.value === "piano") {
		var sfx = array[0][6];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][6];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][6];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound7() {
	if (select.value === "piano") {
		var sfx = array[0][7];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][7];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][7];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound8() {
	if (select.value === "piano") {
		var sfx = array[0][8];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][8];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][8];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound9() {
	if (select.value === "piano") {
		var sfx = array[0][9];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][9];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][9];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound10() {
	if (select.value === "piano") {
		var sfx = array[0][10];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][10];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][10];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound11() {
	if (select.value === "piano") {
		var sfx = array[0][11];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][11];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][11];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound12() {
	if (select.value === "piano") {
		var sfx = array[0][12];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][12];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][12];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound13() {
	if (select.value === "piano") {
		var sfx = array[0][13];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][13];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][13];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound14() {
	if (select.value === "piano") {
		var sfx = array[0][14];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][14];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][14];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound15() {
	if (select.value === "piano") {
		var sfx = array[0][15];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][15];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][15];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound16() {
	if (select.value === "piano") {
		var sfx = array[0][16];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][16];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][16];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound17() {
	if (select.value === "piano") {
		var sfx = array[0][17];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][17];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][17];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound18() {
	if (select.value === "piano") {
		var sfx = array[0][18];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][18];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][18];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound19() {
	if (select.value === "piano") {
		var sfx = array[0][19];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array[1][19];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array[2][19];
			sfx.autoplay = 'true';
			sfx.load();
	}
};





// MAJOR KEYS
function playSound20() {
	if (select.value === "piano") {
		var sfx = array2[0][0];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][0];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][0];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound21() {
	if (select.value === "piano") {
		var sfx = array2[0][1];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][1];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][1];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound22() {
	if (select.value === "piano") {
		var sfx = array2[0][2];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][2];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][2];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound23() {
	if (select.value === "piano") {
		var sfx = array2[0][3];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][3];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][3];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound24() {
	if (select.value === "piano") {
		var sfx = array2[0][4];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][4];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][4];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound25() {
	if (select.value === "piano") {
		var sfx = array2[0][5];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][5];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][5];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound26() {
	if (select.value === "piano") {
		var sfx = array2[0][6];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][6];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][6];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound27() {
	if (select.value === "piano") {
		var sfx = array2[0][7];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][7];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][7];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound28() {
	if (select.value === "piano") {
		var sfx = array2[0][8];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][8];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][8];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound29() {
	if (select.value === "piano") {
		var sfx = array2[0][9];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][9];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][9];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound30() {
	if (select.value === "piano") {
		var sfx = array2[0][10];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][10];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][10];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound31() {
	if (select.value === "piano") {
		var sfx = array2[0][11];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][11];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][11];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound32() {
	if (select.value === "piano") {
		var sfx = array2[0][12];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][12];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][12];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound33() {
	if (select.value === "piano") {
		var sfx = array2[0][13];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][13];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][13];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound34() {
	if (select.value === "piano") {
		var sfx = array2[0][14];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][14];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][14];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound35() {
	if (select.value === "piano") {
		var sfx = array2[0][15];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][15];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][15];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound36() {
	if (select.value === "piano") {
		var sfx = array2[0][16];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][16];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][16];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound37() {
	if (select.value === "piano") {
		var sfx = array2[0][17];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][17];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][17];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound38() {
	if (select.value === "piano") {
		var sfx = array2[0][18];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][18];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][18];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound39() {
	if (select.value === "piano") {
		var sfx = array2[0][19];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][19];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][19];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound40() {
	if (select.value === "piano") {
		var sfx = array2[0][20];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][20];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][20];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound41() {
	if (select.value === "piano") {
		var sfx = array2[0][21];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][21];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][21];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound42() {
	if (select.value === "piano") {
		var sfx = array2[0][22];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][22];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][22];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound43() {
	if (select.value === "piano") {
		var sfx = array2[0][23];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][23];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][23];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound44() {
	if (select.value === "piano") {
		var sfx = array2[0][24];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][24];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][24];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound45() {
	if (select.value === "piano") {
		var sfx = array2[0][25];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][25];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][25];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound46() {
	if (select.value === "piano") {
		var sfx = array2[0][26];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][26];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][26];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound47() {
	if (select.value === "piano") {
		var sfx = array2[0][27];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][27];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][27];
			sfx.autoplay = 'true';
			sfx.load();
	}
};
function playSound48() {
	if (select.value === "piano") {
		var sfx = array2[0][28];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "harp") {
		var sfx = array2[1][28];
			sfx.autoplay = 'true';
			sfx.load();
	} else if (select.value === "ac-guitar") {
		var sfx = array2[2][28];
			sfx.autoplay = 'true';
			sfx.load();
	}
};




// function play(event1) {
// 	// 
// 	if (event1.keyCode === 13) {
// 		playSound();
// 	}
// };

// html.addEventListener("keypress", play());





function playAfterKeypress(event1) {
	// if (event1.keyCode === 13) {
	// 	playSound();
	// } else if (event1.keyCode === 13) {
	// 	playSound1();
	// }
	event1.keyCode ===49 ? playSound() : null;
	event1.keyCode ===50 ? playSound1() : null;
	event1.keyCode ===51 ? playSound2() : null;
	event1.keyCode ===52 ? playSound3() : null;
	event1.keyCode ===53 ? playSound4() : null;
	event1.keyCode ===54 ? playSound5() : null;
	event1.keyCode ===55 ? playSound6() : null;
	event1.keyCode ===56 ? playSound7() : null;
	event1.keyCode ===57 ? playSound8() : null;
	event1.keyCode ===48 ? playSound9() : null;
	event1.keyCode ===189 ? playSound10() : null;
	event1.keyCode ===187 ? playSound11() : null;
	event1.keyCode ===81 ? playSound12() : null;
	event1.keyCode ===87 ? playSound13() : null;
	event1.keyCode ===69 ? playSound14() : null;
	event1.keyCode ===82 ? playSound15() : null;
	event1.keyCode ===84 ? playSound16() : null;
	event1.keyCode ===89 ? playSound17() : null;
	event1.keyCode ===85 ? playSound18() : null;
	event1.keyCode ===73 ? playSound19() : null;
	event1.keyCode ===79 ? playSound20() : null;
	event1.keyCode ===80 ? playSound21() : null;
	event1.keyCode ===219 ? playSound22() : null;
	event1.keyCode ===221 ? playSound23() : null;
	event1.keyCode ===220 ? playSound24() : null;
	event1.keyCode ===65 ? playSound25() : null;
	event1.keyCode ===83 ? playSound26() : null;
	event1.keyCode ===68 ? playSound27() : null;
	event1.keyCode ===70 ? playSound28() : null;
	event1.keyCode ===71 ? playSound29() : null;
	event1.keyCode ===72 ? playSound30() : null;
	event1.keyCode ===74 ? playSound31() : null;
	event1.keyCode ===75 ? playSound32() : null;
	event1.keyCode ===76 ? playSound33() : null;
	event1.keyCode ===186 ? playSound34() : null;
	event1.keyCode ===192 ? playSound35() : null;
	event1.keyCode ===90 ? playSound36() : null;
	event1.keyCode ===88 ? playSound37() : null;
	event1.keyCode ===67 ? playSound38() : null;
	event1.keyCode ===86 ? playSound39() : null;
	event1.keyCode ===66 ? playSound40() : null;
	event1.keyCode ===78 ? playSound41() : null;
	event1.keyCode ===77 ? playSound42() : null;
	event1.keyCode ===188 ? playSound43() : null;
	event1.keyCode ===190 ? playSound44() : null;
	event1.keyCode ===191 ? playSound45() : null;
	event1.keyCode ===103 ? playSound46() : null;
	event1.keyCode ===104 ? playSound47() : null;
	event1.keyCode ===105 ? playSound48() : null;

}

input.addEventListener("keypress", playAfterKeypress);







// select.value = "harp" && select.value != "piano" && select.value != "ac-guitar" ? console.log("Select.value works!!") : null;
// option.value = harp ? alert("Select.value works!!") : null;

// const gey = ['a', 'b', ['dw', 'ex', 'fy'], 'c',]
// console.log(gey[2][1]);








// const array3 [
// 				document.querySelector("#maj1").innerHTML = "<audio id="maj1"><source src="Harpmaj1.wav"></audio>"
// 				document.querySelector("Harpmaj2")
// 				document.querySelector("Harpmaj3")

// ];



// 	if (select.value = harp) {
// 		var sfx = array3[0];
// 			sfx.autoplay = 'true';
// 			sfx.load();
// 	} else {