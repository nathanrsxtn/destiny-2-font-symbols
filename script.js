var font = {
    360: {
        element: document.querySelector("[symbols='360']"),
        symbols: ["&#xE000", "&#xE001", "&#xE002", "&#xE003", "&#xE004", "&#xE005", "&#xE006", "&#xE007", "&#xE008", "&#xE009", "&#xE010", "&#xE011", "&#xE012", "&#xE013", "&#xE014", "&#xE015", "&#xE016", "&#xE017", "&#xE020", "&#xE050", "&#xE051", "&#xE100", "&#xE101", "&#xE102", "&#xE103", "&#xE104", "&#xE105", "&#xE106", "&#xE107", "&#xE108", "&#xE109", "&#xE110", "&#xE111", "&#xE112", "&#xE120", "&#xE121", "&#xE122", "&#xE123", "&#xE124", "&#xE125", "&#xE126", "&#xE127", "&#xE130", "&#xE131", "&#xE132", "&#xE133", "&#xE134", "&#xE135", "&#xE136", "&#xE140", "&#xE141", "&#xE142", "&#xE143", "&#xE144", "&#xE150", "&#xE151", "&#xE152", "&#xE153", "&#xF301"]
    },
    PC: {
        element: document.querySelector("[symbols='PC']"),
        symbols: ["&#xE000", "&#xE001", "&#xE002", "&#xE003", "&#xE004", "&#xE005", "&#xE006", "&#xE007", "&#xE008", "&#xE009", "&#xE010", "&#xE011", "&#xE012", "&#xE013", "&#xE014", "&#xE015", "&#xE016", "&#xE017", "&#xE018", "&#xE019", "&#xE020", "&#xE021", "&#xE022", "&#xE023", "&#xE024", "&#xE050", "&#xE051", "&#xE052", "&#xE053", "&#xE054", "&#xE055", "&#xE056", "&#xE057", "&#xE058", "&#xE059", "&#xE060", "&#xE061", "&#xE062", "&#xE063", "&#xE064", "&#xE065", "&#xE066", "&#xE067", "&#xE068", "&#xE069", "&#xE070", "&#xE071", "&#xE072", "&#xE075", "&#xE099", "&#xE100", "&#xE101", "&#xE102", "&#xE103", "&#xE104", "&#xE105", "&#xE106", "&#xE107", "&#xE108", "&#xE109", "&#xE110", "&#xE111", "&#xE112", "&#xE113", "&#xE118", "&#xE119", "&#xE120", "&#xE121", "&#xE122", "&#xE123", "&#xE124", "&#xE125", "&#xE126", "&#xE127", "&#xE128", "&#xE130", "&#xE131", "&#xE132", "&#xE133", "&#xE134", "&#xE135", "&#xE136", "&#xE137", "&#xE138", "&#xE140", "&#xE141", "&#xE142", "&#xE143", "&#xE144", "&#xE150", "&#xE151", "&#xE152", "&#xE153", "&#xE154", "&#xE155", "&#xE157", "&#xE158", "&#xE159", "&#xE160", "&#xE161", "&#xE162", "&#xE163", "&#xE164", "&#xE165", "&#xE166", "&#xE167", "&#xE168", "&#xE169", "&#xE170", "&#xE171", "&#xE172", "&#xE173", "&#xE174", "&#xE175", "&#xE176", "&#xE177", "&#xE178", "&#xE179", "&#xE180", "&#xE181", "&#xE182", "&#xE183", "&#xE184", "&#xE185", "&#xE186", "&#xE187", "&#xE188", "&#xE189", "&#xE202", "&#xE203", "&#xE204", "&#xE205", "&#xE206", "&#xE207", "&#xE208", "&#xE209", "&#xE211", "&#xE212", "&#xE213", "&#xE214", "&#xE215", "&#xE216", "&#xE217", "&#xE218", "&#xE219", "&#xE220", "&#xE221", "&#xEE21", "&#xEE22", "&#xEE23", "&#xEE24", "&#xEE25", "&#xEE26", "&#xEE27", "&#xEE28", "&#xEE29", "&#xEE2A", "&#xEE2B", "&#xEE2C", "&#xEE2D", "&#xEE2E", "&#xEE2F", "&#xEE30", "&#xEE31", "&#xEE32", "&#xEE33", "&#xEE34", "&#xEE35", "&#xEE36", "&#xEE37", "&#xEE38", "&#xEE39", "&#xEE3A", "&#xEE3B", "&#xEE3C", "&#xEE3D", "&#xEE3E", "&#xEE3F", "&#xEE40", "&#xEE41", "&#xEE42", "&#xEE43", "&#xEE44", "&#xEE45", "&#xEE46", "&#xEE47", "&#xEE48", "&#xEE49", "&#xEE4A", "&#xEE4B", "&#xEE4C", "&#xEE4D", "&#xEE4E", "&#xEE4F", "&#xEE50", "&#xEE51", "&#xEE52", "&#xEE53", "&#xEE54", "&#xEE55", "&#xEE56", "&#xEE57", "&#xEE58", "&#xEE59", "&#xEE5A", "&#xEE5B", "&#xEE5C", "&#xEE5D", "&#xEE5E", "&#xEE5F", "&#xEE60", "&#xEE61", "&#xEE62", "&#xEE63", "&#xEE64", "&#xEE65", "&#xEE66", "&#xEE67", "&#xEE68", "&#xEE69", "&#xEE6A", "&#xEE6B", "&#xEE6C", "&#xEE6D", "&#xEE6E", "&#xEE6F", "&#xEE70", "&#xEE71", "&#xEE72", "&#xEE73", "&#xEE74", "&#xEE75", "&#xEE76", "&#xEE77", "&#xEE78", "&#xEE79", "&#xEE7A", "&#xEE7B", "&#xEE7C", "&#xEE7D", "&#xEE7E", "&#xEEA1", "&#xEEA2", "&#xEEA3", "&#xEEA4", "&#xEEA5", "&#xEEA6", "&#xEEA7", "&#xEEA8", "&#xEEA9", "&#xEEAA", "&#xEEAB", "&#xEEAC", "&#xEEAD", "&#xEEAE", "&#xEEAF", "&#xEEB0", "&#xEEB1", "&#xEEB2", "&#xEEB3", "&#xEEB4", "&#xEEB5", "&#xEEB6", "&#xEEB7", "&#xEEB8", "&#xEEB9", "&#xEEBA", "&#xEEBB", "&#xEEBC", "&#xEEBD", "&#xEEBE", "&#xEEBF", "&#xEEC0", "&#xEEC1", "&#xEEC2", "&#xEEC3", "&#xEEC4", "&#xEEC5", "&#xEEC6", "&#xEEC7", "&#xEEC8", "&#xEEC9", "&#xEECA", "&#xEECB", "&#xEECC", "&#xEECD", "&#xEECE", "&#xEECF", "&#xEED0", "&#xEED1", "&#xEED2", "&#xEED3", "&#xEED4", "&#xEED5", "&#xEED6", "&#xEED7", "&#xEED8", "&#xEED9", "&#xEEDA", "&#xEEDC", "&#xEEDF", "&#xEEE0", "&#xEEE1", "&#xEEE2", "&#xEEE3", "&#xEEE4", "&#xEEE5", "&#xEEE6", "&#xEEF0", "&#xEEF1", "&#xEEF3", "&#xEEF4", "&#xEEF5", "&#xEEF6", "&#xEEF7", "&#xEEF8", "&#xEEF9", "&#xEEFA", "&#xF301"]
    },
    PS4: {
        element: document.querySelector("[symbols='PS4']"),
        symbols: ["&#xE000", "&#xE001", "&#xE002", "&#xE003", "&#xE004", "&#xE005", "&#xE006", "&#xE007", "&#xE008", "&#xE009", "&#xE010", "&#xE011", "&#xE012", "&#xE013", "&#xE014", "&#xE015", "&#xE016", "&#xE017", "&#xE018", "&#xE019", "&#xE020", "&#xE021", "&#xE022", "&#xE023", "&#xE024", "&#xE050", "&#xE051", "&#xE052", "&#xE053", "&#xE054", "&#xE055", "&#xE056", "&#xE057", "&#xE058", "&#xE059", "&#xE060", "&#xE061", "&#xE062", "&#xE063", "&#xE064", "&#xE065", "&#xE066", "&#xE067", "&#xE068", "&#xE069", "&#xE070", "&#xE071", "&#xE072", "&#xE075", "&#xE099", "&#xE100", "&#xE101", "&#xE102", "&#xE103", "&#xE104", "&#xE105", "&#xE106", "&#xE107", "&#xE108", "&#xE109", "&#xE110", "&#xE111", "&#xE112", "&#xE113", "&#xE118", "&#xE119", "&#xE120", "&#xE121", "&#xE122", "&#xE123", "&#xE124", "&#xE125", "&#xE126", "&#xE127", "&#xE128", "&#xE130", "&#xE131", "&#xE132", "&#xE133", "&#xE134", "&#xE135", "&#xE136", "&#xE137", "&#xE138", "&#xE140", "&#xE141", "&#xE142", "&#xE143", "&#xE144", "&#xE150", "&#xE151", "&#xE152", "&#xE153", "&#xE154", "&#xE155", "&#xF301"]
    },
    Steam: {
        element: document.querySelector("[symbols='Steam']"),
        symbols: ["&#xE000", "&#xE001", "&#xE002", "&#xE003", "&#xE004", "&#xE005", "&#xE006", "&#xE007", "&#xE008", "&#xE009", "&#xE010", "&#xE011", "&#xE012", "&#xE013", "&#xE014", "&#xE015", "&#xE016", "&#xE017", "&#xE018", "&#xE019", "&#xE020", "&#xE021", "&#xE022", "&#xE050", "&#xE051", "&#xE052", "&#xE100", "&#xE101", "&#xE102", "&#xE103", "&#xE104", "&#xE105", "&#xE106", "&#xE107", "&#xE108", "&#xE109", "&#xE110", "&#xE111", "&#xE112", "&#xE113", "&#xE120", "&#xE121", "&#xE122", "&#xE123", "&#xE124", "&#xE125", "&#xE126", "&#xE127", "&#xE130", "&#xE131", "&#xE132", "&#xE133", "&#xE134", "&#xE135", "&#xE136", "&#xE137", "&#xE140", "&#xE141", "&#xE142", "&#xE143", "&#xE144", "&#xE150", "&#xE151", "&#xE152", "&#xE153", "&#xF301"]
    },
    Xbox_ONE: {
        element: document.querySelector("[symbols='Xbox_ONE']"),
        symbols: ["&#xE000", "&#xE001", "&#xE002", "&#xE003", "&#xE004", "&#xE005", "&#xE006", "&#xE007", "&#xE008", "&#xE009", "&#xE010", "&#xE011", "&#xE012", "&#xE013", "&#xE014", "&#xE015", "&#xE016", "&#xE017", "&#xE020", "&#xE021", "&#xE022", "&#xE023", "&#xE024", "&#xE050", "&#xE051", "&#xE052", "&#xE053", "&#xE054", "&#xE055", "&#xE056", "&#xE057", "&#xE058", "&#xE059", "&#xE060", "&#xE061", "&#xE062", "&#xE063", "&#xE064", "&#xE065", "&#xE066", "&#xE067", "&#xE068", "&#xE069", "&#xE070", "&#xE071", "&#xE072", "&#xE075", "&#xE099", "&#xE100", "&#xE101", "&#xE102", "&#xE103", "&#xE104", "&#xE105", "&#xE106", "&#xE107", "&#xE108", "&#xE109", "&#xE110", "&#xE111", "&#xE112", "&#xE113", "&#xE118", "&#xE119", "&#xE120", "&#xE121", "&#xE122", "&#xE123", "&#xE124", "&#xE125", "&#xE126", "&#xE127", "&#xE128", "&#xE130", "&#xE131", "&#xE132", "&#xE133", "&#xE134", "&#xE135", "&#xE136", "&#xE137", "&#xE138", "&#xE140", "&#xE141", "&#xE142", "&#xE143", "&#xE144", "&#xE150", "&#xE151", "&#xE152", "&#xE153", "&#xE154", "&#xE155", "&#xF301"]
    }
}
var favorites = document.querySelector("#favorites")
Array.from(document.querySelectorAll("[type='checkbox']")).forEach(function (element) {
    element.oninput();
});
Object.keys(font).forEach(function (key) {
    font[key].symbols.forEach(function (symbol) {
        var favorite = document.createElement("span");
        favorite.innerHTML = symbol;
        favorite.title = symbol + "\n" + "Click to Copy";
        favorite.setAttribute("section", key)
        favorite.setAttribute("symbol", String.fromCharCode(parseInt(symbol.replace("&#x", ""), 16)));
        favorite.onclick = function () {
            const selection = window.getSelection();
            const range = document.createRange();
            const title = favorite.title;
            range.selectNodeContents(favorite);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            favorite.title = "Copied!";
            favorite.onmouseout = function () {
                favorite.title = title;
            };
        }
        var span = document.createElement("span");
        span.innerHTML = symbol;
        span.title = symbol + "\n" + "Click to Copy";
        span.setAttribute("symbol", String.fromCharCode(parseInt(symbol.replace("&#x", ""), 16)));
        span.onclick = function () {
            const selection = window.getSelection();
            const range = document.createRange();
            const title = span.title;
            range.selectNodeContents(span);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            span.title = "Copied!";
            favorites.appendChild(favorite);
            span.onmouseout = function () {
                span.title = title;
            };
        }
        font[key].element.appendChild(span);
    })
});
