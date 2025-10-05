'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var noticeTimeout = 15 * 1000;
var sourceDeckExtension = "-source";
var flashcardsIcon = "<path fill=\"currentColor\" stroke=\"currentColor\" d=\"m98.69029,0.55335l-54.30674,0a1.1128,1.14693 0 0 0 -1.1128,1.15682l0,26.36956l-42.32491,14.67282a1.1128,1.14693 0 0 0 -0.7003,1.45344c0.09593,0.30651 9.89052,30.40359 13.18097,40.38981c2.6573,8.05819 2.20642,13.55555 2.19683,13.61488a1.1128,1.14693 0 0 0 0.4221,0.98873a1.08402,1.11727 0 0 0 0.69071,0.24718a1.10321,1.13704 0 0 0 0.35495,-0.05932l51.47676,-17.79722a1.1224,1.15682 0 0 0 0.75786,-0.98873c0,-0.2373 0.58518,-5.71489 -2.16805,-14.14879c-0.62355,-1.92803 -1.48694,-4.56795 -2.47503,-7.60337l34.00766,0a1.1128,1.14693 0 0 0 1.1224,-1.14693l0,-55.99205a1.1224,1.15682 0 0 0 -1.1224,-1.15682zm-31.55182,79.09878l-49.24156,17.02601a41.33682,42.60458 0 0 0 -2.35991,-12.85355c-2.87794,-8.86895 -11.02251,-33.73563 -12.81643,-39.25277l49.35668,-17.115c1.8131,5.53691 10.00564,30.65078 12.96032,39.70759a35.96466,37.06766 0 0 1 2.1009,12.48772zm30.43902,-23.07707l-33.65272,0c-4.25935,-13.03152 -10.08238,-30.9474 -10.08238,-30.9474a1.1224,1.15682 0 0 0 -1.41978,-0.72178l-6.91665,2.39274l0,-24.44152l52.07154,0l0,53.71796z\"/>";
var sourceField = "<br><br>\r\n<small>Source: {{Source}}</small>";

var Anki = /** @class */ (function () {
    function Anki() {
    }
    Anki.prototype.createModels = function (sourceSupport) {
        return __awaiter(this, void 0, void 0, function () {
            var models;
            return __generator(this, function (_a) {
                models = this.getModels(sourceSupport);
                return [2 /*return*/, this.invoke("multi", 6, { actions: models })];
            });
        });
    };
    Anki.prototype.createDeck = function (deckName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.invoke("createDeck", 6, { deck: deckName })];
            });
        });
    };
    Anki.prototype.storeMediaFiles = function (cards) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, cards_1, cards_1_1, card, _a, _b, media;
            var e_1, _c, e_2, _d;
            return __generator(this, function (_e) {
                actions = [];
                try {
                    for (cards_1 = __values(cards), cards_1_1 = cards_1.next(); !cards_1_1.done; cards_1_1 = cards_1.next()) {
                        card = cards_1_1.value;
                        try {
                            for (_a = (e_2 = void 0, __values(card.getMedias())), _b = _a.next(); !_b.done; _b = _a.next()) {
                                media = _b.value;
                                actions.push({
                                    action: "storeMediaFile",
                                    params: media,
                                });
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (cards_1_1 && !cards_1_1.done && (_c = cards_1.return)) _c.call(cards_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (actions) {
                    return [2 /*return*/, this.invoke("multi", 6, { actions: actions })];
                }
                else {
                    return [2 /*return*/, {}];
                }
            });
        });
    };
    Anki.prototype.addCards = function (cards) {
        return __awaiter(this, void 0, void 0, function () {
            var notes;
            return __generator(this, function (_a) {
                notes = [];
                cards.forEach(function (card) { return notes.push(card.getCard(false)); });
                return [2 /*return*/, this.invoke("addNotes", 6, {
                        notes: notes,
                    })];
            });
        });
    };
    /**
     * Given the new cards with an optional deck name, it updates all the cards on Anki.
     *
     * Be aware of https://github.com/FooSoft/anki-connect/issues/82. If the Browse pane is opened on Anki,
     * the update does not change all the cards.
     * @param cards the new cards.
     * @param deckName the new deck name.
     */
    Anki.prototype.updateCards = function (cards) {
        return __awaiter(this, void 0, void 0, function () {
            var updateActions, ids, cards_2, cards_2_1, card;
            var e_3, _a;
            return __generator(this, function (_b) {
                updateActions = [];
                ids = [];
                try {
                    for (cards_2 = __values(cards), cards_2_1 = cards_2.next(); !cards_2_1.done; cards_2_1 = cards_2.next()) {
                        card = cards_2_1.value;
                        updateActions.push({
                            action: "updateNoteFields",
                            params: {
                                note: card.getCard(true),
                            },
                        });
                        updateActions = updateActions.concat(this.mergeTags(card.oldTags, card.tags, card.id));
                        ids.push(card.id);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (cards_2_1 && !cards_2_1.done && (_a = cards_2.return)) _a.call(cards_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                // Update deck
                updateActions.push({
                    action: "changeDeck",
                    params: {
                        cards: ids,
                        deck: cards[0].deckName,
                    },
                });
                return [2 /*return*/, this.invoke("multi", 6, { actions: updateActions })];
            });
        });
    };
    Anki.prototype.changeDeck = function (ids, deckName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke("changeDeck", 6, { cards: ids, deck: deckName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Anki.prototype.cardsInfo = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke("cardsInfo", 6, { cards: ids })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Anki.prototype.getCards = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke("notesInfo", 6, { notes: ids })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Anki.prototype.deleteCards = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.invoke("deleteNotes", 6, { notes: ids })];
            });
        });
    };
    Anki.prototype.ping = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoke("version", 6)];
                    case 1: return [2 /*return*/, (_a.sent()) === 6];
                }
            });
        });
    };
    Anki.prototype.mergeTags = function (oldTags, newTags, cardId) {
        var e_4, _a, e_5, _b;
        var actions = [];
        try {
            // Find tags to Add
            for (var newTags_1 = __values(newTags), newTags_1_1 = newTags_1.next(); !newTags_1_1.done; newTags_1_1 = newTags_1.next()) {
                var tag = newTags_1_1.value;
                var index = oldTags.indexOf(tag);
                if (index > -1) {
                    oldTags.splice(index, 1);
                }
                else {
                    actions.push({
                        action: "addTags",
                        params: {
                            notes: [cardId],
                            tags: tag,
                        },
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (newTags_1_1 && !newTags_1_1.done && (_a = newTags_1.return)) _a.call(newTags_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            // All Tags to delete
            for (var oldTags_1 = __values(oldTags), oldTags_1_1 = oldTags_1.next(); !oldTags_1_1.done; oldTags_1_1 = oldTags_1.next()) {
                var tag = oldTags_1_1.value;
                actions.push({
                    action: "removeTags",
                    params: {
                        notes: [cardId],
                        tags: tag,
                    },
                });
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (oldTags_1_1 && !oldTags_1_1.done && (_b = oldTags_1.return)) _b.call(oldTags_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return actions;
    };
    Anki.prototype.invoke = function (action, version, params) {
        if (version === void 0) { version = 6; }
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("error", function () { return reject("failed to issue request"); });
            xhr.addEventListener("load", function () {
                try {
                    var response = JSON.parse(xhr.responseText);
                    if (Object.getOwnPropertyNames(response).length != 2) {
                        throw "response has an unexpected number of fields";
                    }
                    if (!Object.prototype.hasOwnProperty.call(response, "error")) {
                        throw "response is missing required error field";
                    }
                    if (!Object.prototype.hasOwnProperty.call(response, "result")) {
                        throw "response is missing required result field";
                    }
                    if (response.error) {
                        throw response.error;
                    }
                    resolve(response.result);
                }
                catch (e) {
                    reject(e);
                }
            });
            xhr.open("POST", "http://127.0.0.1:8765");
            xhr.send(JSON.stringify({ action: action, version: version, params: params }));
        });
    };
    Anki.prototype.getModels = function (sourceSupport) {
        var sourceFieldContent = "";
        var sourceExtension = "";
        if (sourceSupport) {
            sourceFieldContent = "\r\n" + sourceField;
            sourceExtension = sourceDeckExtension;
        }
        var css = '.card {\r\n font-family: arial;\r\n font-size: 20px;\r\n text-align: center;\r\n color: black;\r\n background-color: white;\r\n}\r\n\r\n.tag::before {\r\n\tcontent: "#";\r\n}\r\n\r\n.tag {\r\n  color: white;\r\n  background-color: #9F2BFF;\r\n  border: none;\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n  padding: 1px 8px;\r\n  margin: 0px 3px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  border-radius: 14px;\r\n  display: inline;\r\n  vertical-align: middle;\r\n}\r\n .cloze { font-weight: bold; color: blue;}.nightMode .cloze { color: lightblue;}';
        var front = "{{Front}}\r\n<p class=\"tags\">{{Tags}}</p>\r\n\r\n<script>\r\n    var tagEl = document.querySelector('.tags');\r\n    var tags = tagEl.innerHTML.split(' ');\r\n    var html = '';\r\n    tags.forEach(function(tag) {\r\n\tif (tag) {\r\n\t    var newTag = '<span class=\"tag\">' + tag + '</span>';\r\n           html += newTag;\r\n    \t    tagEl.innerHTML = html;\r\n\t}\r\n    });\r\n    \r\n</script>";
        var back = "{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}".concat(sourceFieldContent);
        var frontReversed = "{{Back}}\r\n<p class=\"tags\">{{Tags}}</p>\r\n\r\n<script>\r\n    var tagEl = document.querySelector('.tags');\r\n    var tags = tagEl.innerHTML.split(' ');\r\n    var html = '';\r\n    tags.forEach(function(tag) {\r\n\tif (tag) {\r\n\t    var newTag = '<span class=\"tag\">' + tag + '</span>';\r\n           html += newTag;\r\n    \t    tagEl.innerHTML = html;\r\n\t}\r\n    });\r\n    \r\n</script>";
        var backReversed = "{{FrontSide}}\n\n<hr id=answer>\n\n{{Front}}".concat(sourceFieldContent);
        var prompt = "{{Prompt}}\r\n<p class=\"tags\">\uD83E\uDDE0spaced {{Tags}}</p>\r\n\r\n<script>\r\n    var tagEl = document.querySelector('.tags');\r\n    var tags = tagEl.innerHTML.split(' ');\r\n    var html = '';\r\n    tags.forEach(function(tag) {\r\n\tif (tag) {\r\n\t    var newTag = '<span class=\"tag\">' + tag + '</span>';\r\n           html += newTag;\r\n    \t    tagEl.innerHTML = html;\r\n\t}\r\n    });\r\n    \r\n</script>";
        var promptBack = "{{FrontSide}}\n\n<hr id=answer>\uD83E\uDDE0 Review done.".concat(sourceFieldContent);
        var clozeFront = "{{cloze:Text}}\n\n<script>\r\n    var tagEl = document.querySelector('.tags');\r\n    var tags = tagEl.innerHTML.split(' ');\r\n    var html = '';\r\n    tags.forEach(function(tag) {\r\n\tif (tag) {\r\n\t    var newTag = '<span class=\"tag\">' + tag + '</span>';\r\n           html += newTag;\r\n    \t    tagEl.innerHTML = html;\r\n\t}\r\n    });\r\n    \r\n</script>";
        var clozeBack = "{{cloze:Text}}\n\n<br>{{Extra}}".concat(sourceFieldContent, "<script>\r\n    var tagEl = document.querySelector('.tags');\r\n    var tags = tagEl.innerHTML.split(' ');\r\n    var html = '';\r\n    tags.forEach(function(tag) {\r\n\tif (tag) {\r\n\t    var newTag = '<span class=\"tag\">' + tag + '</span>';\r\n           html += newTag;\r\n    \t    tagEl.innerHTML = html;\r\n\t}\r\n    });\r\n    \r\n</script>");
        var classicFields = ["Front", "Back"];
        var promptFields = ["Prompt"];
        var clozeFields = ["Text", "Extra"];
        if (sourceSupport) {
            classicFields = classicFields.concat("Source");
            promptFields = promptFields.concat("Source");
            clozeFields = clozeFields.concat("Source");
        }
        var obsidianBasic = {
            action: "createModel",
            params: {
                modelName: "Obsidian-basic".concat(sourceExtension),
                inOrderFields: classicFields,
                css: css,
                cardTemplates: [
                    {
                        Name: "Front / Back",
                        Front: front,
                        Back: back,
                    },
                ],
            },
        };
        var obsidianBasicReversed = {
            action: "createModel",
            params: {
                modelName: "Obsidian-basic-reversed".concat(sourceExtension),
                inOrderFields: classicFields,
                css: css,
                cardTemplates: [
                    {
                        Name: "Front / Back",
                        Front: front,
                        Back: back,
                    },
                    {
                        Name: "Back / Front",
                        Front: frontReversed,
                        Back: backReversed,
                    },
                ],
            },
        };
        var obsidianCloze = {
            action: "createModel",
            params: {
                modelName: "Obsidian-cloze".concat(sourceExtension),
                inOrderFields: clozeFields,
                css: css,
                isCloze: true,
                cardTemplates: [
                    {
                        Name: "Cloze",
                        Front: clozeFront,
                        Back: clozeBack,
                    },
                ],
            },
        };
        var obsidianSpaced = {
            action: "createModel",
            params: {
                modelName: "Obsidian-spaced".concat(sourceExtension),
                inOrderFields: promptFields,
                css: css,
                cardTemplates: [
                    {
                        Name: "Spaced",
                        Front: prompt,
                        Back: promptBack,
                    },
                ],
            },
        };
        return [obsidianBasic, obsidianBasicReversed, obsidianCloze, obsidianSpaced];
    };
    Anki.prototype.requestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.invoke("requestPermission", 6)];
            });
        });
    };
    return Anki;
}());

function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}
function arraysEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length !== b.length)
        return false;
    a.sort();
    b.sort();
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
function escapeMarkdown(string, skips) {
    if (skips === void 0) { skips = []; }
    var replacements = [
        // [/\*/g, "\\*", "asterisks"],
        [/#/g, "#", "number signs"],
        // [/\//g, "\\/", "slashes"],
        [/\\/g, "\\\\", "backslash"],
        [/\(/g, "\\(", "parentheses"],
        [/\)/g, "\\)", "parentheses"],
        [/\[/g, "\\[", "square brackets"],
        [/\]/g, "\\]", "square brackets"],
        [/</g, "&lt;", "angle brackets"],
        [/>/g, "&gt;", "angle brackets"],
        [/_/g, "\\_", "underscores"],
    ];
    return replacements.reduce(function (s, replacement) {
        var name = replacement[2];
        return name && skips.indexOf(name) !== -1
            ? s
            : s.replace(replacement[0], replacement[1]);
    }, string);
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsTab.prototype.display = function () {
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h1", { text: "Flashcards - Settings" });
        var description = createFragment();
        description.append("This needs to be done only one time. Open Anki and click the button to grant permission.", createEl('br'), 'Be aware that AnkiConnect must be installed.');
        new obsidian.Setting(containerEl)
            .setName("Give Permission")
            .setDesc(description)
            .addButton(function (button) {
            button.setButtonText("Grant Permission").onClick(function () {
                new Anki().requestPermission().then(function (result) {
                    if (result.permission === "granted") {
                        plugin.settings.ankiConnectPermission = true;
                        plugin.saveData(plugin.settings);
                        new obsidian.Notice("Anki Connect permission granted");
                    }
                    else {
                        new obsidian.Notice("AnkiConnect permission not granted");
                    }
                }).catch(function (error) {
                    new obsidian.Notice("Something went wrong, is Anki open?");
                    console.error(error);
                });
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Test Anki")
            .setDesc("Test that connection between Anki and Obsidian actually works.")
            .addButton(function (text) {
            text.setButtonText("Test").onClick(function () {
                new Anki()
                    .ping()
                    .then(function () { return new obsidian.Notice("Anki works"); })
                    .catch(function () { return new obsidian.Notice("Anki is not connected"); });
            });
        });
        containerEl.createEl("h2", { text: "General" });
        new obsidian.Setting(containerEl)
            .setName("Context-aware mode")
            .setDesc("Add the ancestor headings to the question of the flashcard.")
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.contextAwareMode).onChange(function (value) {
                plugin.settings.contextAwareMode = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Source support")
            .setDesc("Add to every card the source, i.e. the link to the original card. NOTE: Old cards made without source support cannot be updated.")
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.sourceSupport).onChange(function (value) {
                plugin.settings.sourceSupport = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Inline ID support")
            .setDesc("Add ID to end of line for inline cards.")
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.inlineID).onChange(function (value) {
                plugin.settings.inlineID = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Folder-based deck name")
            .setDesc("Add ID to end of line for inline cards.")
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.folderBasedDeck).onChange(function (value) {
                plugin.settings.folderBasedDeck = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Default deck name")
            .setDesc("The name of the default deck where the cards will be added when not specified.")
            .addText(function (text) {
            text
                .setValue(plugin.settings.deck)
                .setPlaceholder("Deck::sub-deck")
                .onChange(function (value) {
                if (value.length) {
                    plugin.settings.deck = value;
                    plugin.saveData(plugin.settings);
                }
                else {
                    new obsidian.Notice("The deck name must be at least 1 character long");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Default Anki tag")
            .setDesc("This tag will be added to each generated card on Anki")
            .addText(function (text) {
            text
                .setValue(plugin.settings.defaultAnkiTag)
                .setPlaceholder("Anki tag")
                .onChange(function (value) {
                if (!value)
                    new obsidian.Notice("No default tags will be added");
                plugin.settings.defaultAnkiTag = value.toLowerCase();
                plugin.saveData(plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: "Cards Identification" });
        new obsidian.Setting(containerEl)
            .setName("Flashcards #tag")
            .setDesc("The tag to identify the flashcards in the notes (case-insensitive).")
            .addText(function (text) {
            text
                .setValue(plugin.settings.flashcardsTag)
                .setPlaceholder("Card")
                .onChange(function (value) {
                if (value) {
                    plugin.settings.flashcardsTag = value.toLowerCase();
                    plugin.saveData(plugin.settings);
                }
                else {
                    new obsidian.Notice("The tag must be at least 1 character long");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Inline card separator")
            .setDesc("The separator to identifty the inline cards in the notes.")
            .addText(function (text) {
            text
                .setValue(plugin.settings.inlineSeparator)
                .setPlaceholder("::")
                .onChange(function (value) {
                // if the value is empty or is the same like the inlineseparatorreverse then set it to the default, otherwise save it
                if (value.trim().length === 0 || value === plugin.settings.inlineSeparatorReverse) {
                    plugin.settings.inlineSeparator = "::";
                    if (value.trim().length === 0) {
                        new obsidian.Notice("The separator must be at least 1 character long");
                    }
                    else if (value === plugin.settings.inlineSeparatorReverse) {
                        new obsidian.Notice("The separator must be different from the inline reverse separator");
                    }
                }
                else {
                    plugin.settings.inlineSeparator = escapeRegExp(value.trim());
                    new obsidian.Notice("The separator has been changed");
                }
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Inline reverse card separator")
            .setDesc("The separator to identifty the inline revese cards in the notes.")
            .addText(function (text) {
            text
                .setValue(plugin.settings.inlineSeparatorReverse)
                .setPlaceholder(":::")
                .onChange(function (value) {
                // if the value is empty or is the same like the inlineseparatorreverse then set it to the default, otherwise save it
                if (value.trim().length === 0 || value === plugin.settings.inlineSeparator) {
                    plugin.settings.inlineSeparatorReverse = ":::";
                    if (value.trim().length === 0) {
                        new obsidian.Notice("The separator must be at least 1 character long");
                    }
                    else if (value === plugin.settings.inlineSeparator) {
                        new obsidian.Notice("The separator must be different from the inline separator");
                    }
                }
                else {
                    plugin.settings.inlineSeparatorReverse = escapeRegExp(value.trim());
                    new obsidian.Notice("The separator has been changed");
                }
                plugin.saveData(plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: "Ribbon Icon Behavior" });
        new obsidian.Setting(containerEl)
            .setName("Ribbon icon action")
            .setDesc("Choose what happens when clicking the ribbon icon")
            .addDropdown(function (dropdown) {
            dropdown
                .addOption("single", "Process current file")
                .addOption("folder", "Process current folder")
                .addOption("all", "Process all files")
                .setValue(plugin.settings.ribbonAction || "single")
                .onChange(function (value) {
                plugin.settings.ribbonAction = value;
                plugin.saveData(plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: "Notification Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show no changes notice")
            .setDesc("Display a notification when no changes are needed in the files")
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.showNoChangesNotice).onChange(function (value) {
                plugin.settings.showNoChangesNotice = value;
                plugin.saveData(plugin.settings);
            });
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var showdown = createCommonjsModule(function (module) {
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts (simple) {

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
      type: 'string'
    },
    rawPrefixHeaderId: {
      defaultValue: false,
      describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
      type: 'boolean'
    },
    ghCompatibleHeaderId: {
      defaultValue: false,
      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
      type: 'boolean'
    },
    rawHeaderId: {
      defaultValue: false,
      describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
      type: 'boolean'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    excludeTrailingPunctuationFromURLs: {
      defaultValue: false,
      describe: 'Excludes trailing punctuation from links generated with autoLinking',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    literalMidWordAsterisks: {
      defaultValue: false,
      describe: 'Parse midword asterisks as literal asterisks',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix indentation in es6 strings',
      type: 'boolean'
    },
    disableForced4SpacesIndentedSublists: {
      defaultValue: false,
      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
      type: 'boolean'
    },
    simpleLineBreaks: {
      defaultValue: false,
      description: 'Parses simple line breaks as <br> (GFM Style)',
      type: 'boolean'
    },
    requireSpaceBeforeHeadingText: {
      defaultValue: false,
      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
      type: 'boolean'
    },
    ghMentions: {
      defaultValue: false,
      description: 'Enables github @mentions',
      type: 'boolean'
    },
    ghMentionsLink: {
      defaultValue: 'https://github.com/{u}',
      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
      type: 'string'
    },
    encodeEmails: {
      defaultValue: true,
      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
      type: 'boolean'
    },
    openLinksInNewWindow: {
      defaultValue: false,
      description: 'Open all links in new windows',
      type: 'boolean'
    },
    backslashEscapesHTMLTags: {
      defaultValue: false,
      description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
      type: 'boolean'
    },
    emoji: {
      defaultValue: false,
      description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
      type: 'boolean'
    },
    underline: {
      defaultValue: false,
      description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
      type: 'boolean'
    },
    completeHTMLDocument: {
      defaultValue: false,
      description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
      type: 'boolean'
    },
    metadata: {
      defaultValue: false,
      description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
      type: 'boolean'
    },
    splitAdjacentBlockquotes: {
      defaultValue: false,
      description: 'Split adjacent blockquote blocks',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

function allOptionsOn () {
  var options = getDefaultOpts(true),
      ret = {};
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      ret[opt] = true;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    setFlavor = 'vanilla',
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:              true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghCompatibleHeaderId:                 true,
        ghMentions:                           true,
        backslashEscapesHTMLTags:             true,
        emoji:                                true,
        splitAdjacentBlockquotes:             true
      },
      original: {
        noHeaderId:                           true,
        ghCodeBlocks:                         false
      },
      ghost: {
        omitExtraWLInCodeBlocks:              true,
        parseImgDimensions:                   true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        smoothLivePreview:                    true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghMentions:                           false,
        encodeEmails:                         true
      },
      vanilla: getDefaultOpts(true),
      allOn: allOptionsOn()
    };

/**
 * helper namespace
 * @type {{}}
 */
showdown.helper = {};

/**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */
showdown.extensions = {};

/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */
showdown.setOption = function (key, value) {
  globalOptions[key] = value;
  return this;
};

/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
showdown.getOption = function (key) {
  return globalOptions[key];
};

/**
 * Get the global options
 * @static
 * @returns {{}}
 */
showdown.getOptions = function () {
  return globalOptions;
};

/**
 * Reset global options to the default values
 * @static
 */
showdown.resetOptions = function () {
  globalOptions = getDefaultOpts(true);
};

/**
 * Set the flavor showdown should use as default
 * @param {string} name
 */
showdown.setFlavor = function (name) {
  if (!flavor.hasOwnProperty(name)) {
    throw Error(name + ' flavor was not found');
  }
  showdown.resetOptions();
  var preset = flavor[name];
  setFlavor = name;
  for (var option in preset) {
    if (preset.hasOwnProperty(option)) {
      globalOptions[option] = preset[option];
    }
  }
};

/**
 * Get the currently set flavor
 * @returns {string}
 */
showdown.getFlavor = function () {
  return setFlavor;
};

/**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */
showdown.getFlavorOptions = function (name) {
  if (flavor.hasOwnProperty(name)) {
    return flavor[name];
  }
};

/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
showdown.getDefaultOptions = function (simple) {
  return getDefaultOpts(simple);
};

/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
showdown.subParser = function (name, func) {
  if (showdown.helper.isString(name)) {
    if (typeof func !== 'undefined') {
      parsers[name] = func;
    } else {
      if (parsers.hasOwnProperty(name)) {
        return parsers[name];
      } else {
        throw Error('SubParser named ' + name + ' not registered!');
      }
    }
  }
};

/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|function=} ext
 * @returns {*}
 */
showdown.extension = function (name, ext) {

  if (!showdown.helper.isString(name)) {
    throw Error('Extension \'name\' must be a string');
  }

  name = showdown.helper.stdExtName(name);

  // Getter
  if (showdown.helper.isUndefined(ext)) {
    if (!extensions.hasOwnProperty(name)) {
      throw Error('Extension named ' + name + ' is not registered!');
    }
    return extensions[name];

    // Setter
  } else {
    // Expand extension if it's wrapped in a function
    if (typeof ext === 'function') {
      ext = ext();
    }

    // Ensure extension is an array
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExtension = validate(ext, name);

    if (validExtension.valid) {
      extensions[name] = ext;
    } else {
      throw Error(validExtension.error);
    }
  }
};

/**
 * Gets all extensions registered
 * @returns {{}}
 */
showdown.getAllExtensions = function () {
  return extensions;
};

/**
 * Remove an extension
 * @param {string} name
 */
showdown.removeExtension = function (name) {
  delete extensions[name];
};

/**
 * Removes all extensions
 */
showdown.resetExtensions = function () {
  extensions = {};
};

/**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */
function validate (extension, name) {

  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
      ret = {
        valid: true,
        error: ''
      };

  if (!showdown.helper.isArray(extension)) {
    extension = [extension];
  }

  for (var i = 0; i < extension.length; ++i) {
    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
        ext = extension[i];
    if (typeof ext !== 'object') {
      ret.valid = false;
      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
      return ret;
    }

    if (!showdown.helper.isString(ext.type)) {
      ret.valid = false;
      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
      return ret;
    }

    var type = ext.type = ext.type.toLowerCase();

    // normalize extension type
    if (type === 'language') {
      type = ext.type = 'lang';
    }

    if (type === 'html') {
      type = ext.type = 'output';
    }

    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
      return ret;
    }

    if (type === 'listener') {
      if (showdown.helper.isUndefined(ext.listeners)) {
        ret.valid = false;
        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
        return ret;
      }
    } else {
      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
        ret.valid = false;
        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
        return ret;
      }
    }

    if (ext.listeners) {
      if (typeof ext.listeners !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
        return ret;
      }
      for (var ln in ext.listeners) {
        if (ext.listeners.hasOwnProperty(ln)) {
          if (typeof ext.listeners[ln] !== 'function') {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
            return ret;
          }
        }
      }
    }

    if (ext.filter) {
      if (typeof ext.filter !== 'function') {
        ret.valid = false;
        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
        return ret;
      }
    } else if (ext.regex) {
      if (showdown.helper.isString(ext.regex)) {
        ext.regex = new RegExp(ext.regex, 'g');
      }
      if (!(ext.regex instanceof RegExp)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }
    }
  }
  return ret;
}

/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
showdown.validateExtension = function (ext) {

  var validateExtension = validate(ext, null);
  if (!validateExtension.valid) {
    console.warn(validateExtension.error);
    return false;
  }
  return true;
};

/**
 * showdownjs helper functions
 */

if (!showdown.hasOwnProperty('helper')) {
  showdown.helper = {};
}

/**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isString = function (a) {
  return (typeof a === 'string' || a instanceof String);
};

/**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isFunction = function (a) {
  var getType = {};
  return a && getType.toString.call(a) === '[object Function]';
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function (a) {
  return Array.isArray(a);
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */
showdown.helper.forEach = function (obj, callback) {
  // check if obj is defined
  if (showdown.helper.isUndefined(obj)) {
    throw new Error('obj param is required');
  }

  if (showdown.helper.isUndefined(callback)) {
    throw new Error('callback param is required');
  }

  if (!showdown.helper.isFunction(callback)) {
    throw new Error('callback param must be a function/closure');
  }

  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else if (showdown.helper.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else if (typeof (obj) === 'object') {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        callback(obj[prop], prop, obj);
      }
    }
  } else {
    throw new Error('obj does not seem to be an array or an iterable object');
  }
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
};

function escapeCharactersCallback (wholeMatch, m1) {
  var charCodeToEscape = m1.charCodeAt(0);
  return '¨E' + charCodeToEscape + 'E';
}

/**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */
showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

/**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */
showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
  // First we have to escape the escape characters so that
  // we can build a character class out of them
  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

  if (afterBackslash) {
    regexString = '\\\\' + regexString;
  }

  var regex = new RegExp(regexString, 'g');
  text = text.replace(regex, escapeCharactersCallback);

  return text;
};

/**
 * Unescape HTML entities
 * @param txt
 * @returns {string}
 */
showdown.helper.unescapeHTMLEntities = function (txt) {

  return txt
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
};

var rgxFindMatchPos = function (str, left, right, flags) {
  var f = flags || '',
      g = f.indexOf('g') > -1,
      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
      l = new RegExp(left, f.replace(/g/g, '')),
      pos = [],
      t, s, m, start, end;

  do {
    t = 0;
    while ((m = x.exec(str))) {
      if (l.test(m[0])) {
        if (!(t++)) {
          s = x.lastIndex;
          start = s - m[0].length;
        }
      } else if (t) {
        if (!--t) {
          end = m.index + m[0].length;
          var obj = {
            left: {start: start, end: s},
            match: {start: s, end: m.index},
            right: {start: m.index, end: end},
            wholeMatch: {start: start, end: end}
          };
          pos.push(obj);
          if (!g) {
            return pos;
          }
        }
      }
    }
  } while (t && (x.lastIndex = s));

  return pos;
};

/**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */
showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {

  var matchPos = rgxFindMatchPos (str, left, right, flags),
      results = [];

  for (var i = 0; i < matchPos.length; ++i) {
    results.push([
      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
      str.slice(matchPos[i].match.start, matchPos[i].match.end),
      str.slice(matchPos[i].left.start, matchPos[i].left.end),
      str.slice(matchPos[i].right.start, matchPos[i].right.end)
    ]);
  }
  return results;
};

/**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */
showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {

  if (!showdown.helper.isFunction(replacement)) {
    var repStr = replacement;
    replacement = function () {
      return repStr;
    };
  }

  var matchPos = rgxFindMatchPos(str, left, right, flags),
      finalStr = str,
      lng = matchPos.length;

  if (lng > 0) {
    var bits = [];
    if (matchPos[0].wholeMatch.start !== 0) {
      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
    }
    for (var i = 0; i < lng; ++i) {
      bits.push(
        replacement(
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        )
      );
      if (i < lng - 1) {
        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
      }
    }
    if (matchPos[lng - 1].wholeMatch.end < str.length) {
      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
    }
    finalStr = bits.join('');
  }
  return finalStr;
};

/**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */
showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  if (regex instanceof RegExp === false) {
    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
  }
  var indexOf = str.substring(fromIndex || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
};

/**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */
showdown.helper.splitAtIndex = function (str, index) {
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  return [str.substring(0, index), str.substring(index)];
};

/**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */
showdown.helper.encodeEmailAddress = function (mail) {
  var encode = [
    function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    },
    function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    },
    function (ch) {
      return ch;
    }
  ];

  mail = mail.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else {
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  return mail;
};

/**
 *
 * @param str
 * @param targetLength
 * @param padString
 * @returns {string}
 */
showdown.helper.padEnd = function padEnd (str, targetLength, padString) {
  /*jshint bitwise: false*/
  // eslint-disable-next-line space-infix-ops
  targetLength = targetLength>>0; //floor if number or convert non-number to 0;
  /*jshint bitwise: true*/
  padString = String(padString || ' ');
  if (str.length > targetLength) {
    return String(str);
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return String(str) + padString.slice(0,targetLength);
  }
};

/**
 * POLYFILLS
 */
// use this instead of builtin is undefined for IE8 compatibility
if (typeof console === 'undefined') {
  console = {
    warn: function (msg) {
      alert(msg);
    },
    log: function (msg) {
      alert(msg);
    },
    error: function (msg) {
      throw msg;
    }
  };
}

/**
 * Common regexes.
 * We declare some common regexes to improve performance
 */
showdown.helper.regexes = {
  asteriskDashAndColon: /([*_:~])/g
};

/**
 * EMOJIS LIST
 */
showdown.helper.emojis = {
  '+1':'\ud83d\udc4d',
  '-1':'\ud83d\udc4e',
  '100':'\ud83d\udcaf',
  '1234':'\ud83d\udd22',
  '1st_place_medal':'\ud83e\udd47',
  '2nd_place_medal':'\ud83e\udd48',
  '3rd_place_medal':'\ud83e\udd49',
  '8ball':'\ud83c\udfb1',
  'a':'\ud83c\udd70\ufe0f',
  'ab':'\ud83c\udd8e',
  'abc':'\ud83d\udd24',
  'abcd':'\ud83d\udd21',
  'accept':'\ud83c\ude51',
  'aerial_tramway':'\ud83d\udea1',
  'airplane':'\u2708\ufe0f',
  'alarm_clock':'\u23f0',
  'alembic':'\u2697\ufe0f',
  'alien':'\ud83d\udc7d',
  'ambulance':'\ud83d\ude91',
  'amphora':'\ud83c\udffa',
  'anchor':'\u2693\ufe0f',
  'angel':'\ud83d\udc7c',
  'anger':'\ud83d\udca2',
  'angry':'\ud83d\ude20',
  'anguished':'\ud83d\ude27',
  'ant':'\ud83d\udc1c',
  'apple':'\ud83c\udf4e',
  'aquarius':'\u2652\ufe0f',
  'aries':'\u2648\ufe0f',
  'arrow_backward':'\u25c0\ufe0f',
  'arrow_double_down':'\u23ec',
  'arrow_double_up':'\u23eb',
  'arrow_down':'\u2b07\ufe0f',
  'arrow_down_small':'\ud83d\udd3d',
  'arrow_forward':'\u25b6\ufe0f',
  'arrow_heading_down':'\u2935\ufe0f',
  'arrow_heading_up':'\u2934\ufe0f',
  'arrow_left':'\u2b05\ufe0f',
  'arrow_lower_left':'\u2199\ufe0f',
  'arrow_lower_right':'\u2198\ufe0f',
  'arrow_right':'\u27a1\ufe0f',
  'arrow_right_hook':'\u21aa\ufe0f',
  'arrow_up':'\u2b06\ufe0f',
  'arrow_up_down':'\u2195\ufe0f',
  'arrow_up_small':'\ud83d\udd3c',
  'arrow_upper_left':'\u2196\ufe0f',
  'arrow_upper_right':'\u2197\ufe0f',
  'arrows_clockwise':'\ud83d\udd03',
  'arrows_counterclockwise':'\ud83d\udd04',
  'art':'\ud83c\udfa8',
  'articulated_lorry':'\ud83d\ude9b',
  'artificial_satellite':'\ud83d\udef0',
  'astonished':'\ud83d\ude32',
  'athletic_shoe':'\ud83d\udc5f',
  'atm':'\ud83c\udfe7',
  'atom_symbol':'\u269b\ufe0f',
  'avocado':'\ud83e\udd51',
  'b':'\ud83c\udd71\ufe0f',
  'baby':'\ud83d\udc76',
  'baby_bottle':'\ud83c\udf7c',
  'baby_chick':'\ud83d\udc24',
  'baby_symbol':'\ud83d\udebc',
  'back':'\ud83d\udd19',
  'bacon':'\ud83e\udd53',
  'badminton':'\ud83c\udff8',
  'baggage_claim':'\ud83d\udec4',
  'baguette_bread':'\ud83e\udd56',
  'balance_scale':'\u2696\ufe0f',
  'balloon':'\ud83c\udf88',
  'ballot_box':'\ud83d\uddf3',
  'ballot_box_with_check':'\u2611\ufe0f',
  'bamboo':'\ud83c\udf8d',
  'banana':'\ud83c\udf4c',
  'bangbang':'\u203c\ufe0f',
  'bank':'\ud83c\udfe6',
  'bar_chart':'\ud83d\udcca',
  'barber':'\ud83d\udc88',
  'baseball':'\u26be\ufe0f',
  'basketball':'\ud83c\udfc0',
  'basketball_man':'\u26f9\ufe0f',
  'basketball_woman':'\u26f9\ufe0f&zwj;\u2640\ufe0f',
  'bat':'\ud83e\udd87',
  'bath':'\ud83d\udec0',
  'bathtub':'\ud83d\udec1',
  'battery':'\ud83d\udd0b',
  'beach_umbrella':'\ud83c\udfd6',
  'bear':'\ud83d\udc3b',
  'bed':'\ud83d\udecf',
  'bee':'\ud83d\udc1d',
  'beer':'\ud83c\udf7a',
  'beers':'\ud83c\udf7b',
  'beetle':'\ud83d\udc1e',
  'beginner':'\ud83d\udd30',
  'bell':'\ud83d\udd14',
  'bellhop_bell':'\ud83d\udece',
  'bento':'\ud83c\udf71',
  'biking_man':'\ud83d\udeb4',
  'bike':'\ud83d\udeb2',
  'biking_woman':'\ud83d\udeb4&zwj;\u2640\ufe0f',
  'bikini':'\ud83d\udc59',
  'biohazard':'\u2623\ufe0f',
  'bird':'\ud83d\udc26',
  'birthday':'\ud83c\udf82',
  'black_circle':'\u26ab\ufe0f',
  'black_flag':'\ud83c\udff4',
  'black_heart':'\ud83d\udda4',
  'black_joker':'\ud83c\udccf',
  'black_large_square':'\u2b1b\ufe0f',
  'black_medium_small_square':'\u25fe\ufe0f',
  'black_medium_square':'\u25fc\ufe0f',
  'black_nib':'\u2712\ufe0f',
  'black_small_square':'\u25aa\ufe0f',
  'black_square_button':'\ud83d\udd32',
  'blonde_man':'\ud83d\udc71',
  'blonde_woman':'\ud83d\udc71&zwj;\u2640\ufe0f',
  'blossom':'\ud83c\udf3c',
  'blowfish':'\ud83d\udc21',
  'blue_book':'\ud83d\udcd8',
  'blue_car':'\ud83d\ude99',
  'blue_heart':'\ud83d\udc99',
  'blush':'\ud83d\ude0a',
  'boar':'\ud83d\udc17',
  'boat':'\u26f5\ufe0f',
  'bomb':'\ud83d\udca3',
  'book':'\ud83d\udcd6',
  'bookmark':'\ud83d\udd16',
  'bookmark_tabs':'\ud83d\udcd1',
  'books':'\ud83d\udcda',
  'boom':'\ud83d\udca5',
  'boot':'\ud83d\udc62',
  'bouquet':'\ud83d\udc90',
  'bowing_man':'\ud83d\ude47',
  'bow_and_arrow':'\ud83c\udff9',
  'bowing_woman':'\ud83d\ude47&zwj;\u2640\ufe0f',
  'bowling':'\ud83c\udfb3',
  'boxing_glove':'\ud83e\udd4a',
  'boy':'\ud83d\udc66',
  'bread':'\ud83c\udf5e',
  'bride_with_veil':'\ud83d\udc70',
  'bridge_at_night':'\ud83c\udf09',
  'briefcase':'\ud83d\udcbc',
  'broken_heart':'\ud83d\udc94',
  'bug':'\ud83d\udc1b',
  'building_construction':'\ud83c\udfd7',
  'bulb':'\ud83d\udca1',
  'bullettrain_front':'\ud83d\ude85',
  'bullettrain_side':'\ud83d\ude84',
  'burrito':'\ud83c\udf2f',
  'bus':'\ud83d\ude8c',
  'business_suit_levitating':'\ud83d\udd74',
  'busstop':'\ud83d\ude8f',
  'bust_in_silhouette':'\ud83d\udc64',
  'busts_in_silhouette':'\ud83d\udc65',
  'butterfly':'\ud83e\udd8b',
  'cactus':'\ud83c\udf35',
  'cake':'\ud83c\udf70',
  'calendar':'\ud83d\udcc6',
  'call_me_hand':'\ud83e\udd19',
  'calling':'\ud83d\udcf2',
  'camel':'\ud83d\udc2b',
  'camera':'\ud83d\udcf7',
  'camera_flash':'\ud83d\udcf8',
  'camping':'\ud83c\udfd5',
  'cancer':'\u264b\ufe0f',
  'candle':'\ud83d\udd6f',
  'candy':'\ud83c\udf6c',
  'canoe':'\ud83d\udef6',
  'capital_abcd':'\ud83d\udd20',
  'capricorn':'\u2651\ufe0f',
  'car':'\ud83d\ude97',
  'card_file_box':'\ud83d\uddc3',
  'card_index':'\ud83d\udcc7',
  'card_index_dividers':'\ud83d\uddc2',
  'carousel_horse':'\ud83c\udfa0',
  'carrot':'\ud83e\udd55',
  'cat':'\ud83d\udc31',
  'cat2':'\ud83d\udc08',
  'cd':'\ud83d\udcbf',
  'chains':'\u26d3',
  'champagne':'\ud83c\udf7e',
  'chart':'\ud83d\udcb9',
  'chart_with_downwards_trend':'\ud83d\udcc9',
  'chart_with_upwards_trend':'\ud83d\udcc8',
  'checkered_flag':'\ud83c\udfc1',
  'cheese':'\ud83e\uddc0',
  'cherries':'\ud83c\udf52',
  'cherry_blossom':'\ud83c\udf38',
  'chestnut':'\ud83c\udf30',
  'chicken':'\ud83d\udc14',
  'children_crossing':'\ud83d\udeb8',
  'chipmunk':'\ud83d\udc3f',
  'chocolate_bar':'\ud83c\udf6b',
  'christmas_tree':'\ud83c\udf84',
  'church':'\u26ea\ufe0f',
  'cinema':'\ud83c\udfa6',
  'circus_tent':'\ud83c\udfaa',
  'city_sunrise':'\ud83c\udf07',
  'city_sunset':'\ud83c\udf06',
  'cityscape':'\ud83c\udfd9',
  'cl':'\ud83c\udd91',
  'clamp':'\ud83d\udddc',
  'clap':'\ud83d\udc4f',
  'clapper':'\ud83c\udfac',
  'classical_building':'\ud83c\udfdb',
  'clinking_glasses':'\ud83e\udd42',
  'clipboard':'\ud83d\udccb',
  'clock1':'\ud83d\udd50',
  'clock10':'\ud83d\udd59',
  'clock1030':'\ud83d\udd65',
  'clock11':'\ud83d\udd5a',
  'clock1130':'\ud83d\udd66',
  'clock12':'\ud83d\udd5b',
  'clock1230':'\ud83d\udd67',
  'clock130':'\ud83d\udd5c',
  'clock2':'\ud83d\udd51',
  'clock230':'\ud83d\udd5d',
  'clock3':'\ud83d\udd52',
  'clock330':'\ud83d\udd5e',
  'clock4':'\ud83d\udd53',
  'clock430':'\ud83d\udd5f',
  'clock5':'\ud83d\udd54',
  'clock530':'\ud83d\udd60',
  'clock6':'\ud83d\udd55',
  'clock630':'\ud83d\udd61',
  'clock7':'\ud83d\udd56',
  'clock730':'\ud83d\udd62',
  'clock8':'\ud83d\udd57',
  'clock830':'\ud83d\udd63',
  'clock9':'\ud83d\udd58',
  'clock930':'\ud83d\udd64',
  'closed_book':'\ud83d\udcd5',
  'closed_lock_with_key':'\ud83d\udd10',
  'closed_umbrella':'\ud83c\udf02',
  'cloud':'\u2601\ufe0f',
  'cloud_with_lightning':'\ud83c\udf29',
  'cloud_with_lightning_and_rain':'\u26c8',
  'cloud_with_rain':'\ud83c\udf27',
  'cloud_with_snow':'\ud83c\udf28',
  'clown_face':'\ud83e\udd21',
  'clubs':'\u2663\ufe0f',
  'cocktail':'\ud83c\udf78',
  'coffee':'\u2615\ufe0f',
  'coffin':'\u26b0\ufe0f',
  'cold_sweat':'\ud83d\ude30',
  'comet':'\u2604\ufe0f',
  'computer':'\ud83d\udcbb',
  'computer_mouse':'\ud83d\uddb1',
  'confetti_ball':'\ud83c\udf8a',
  'confounded':'\ud83d\ude16',
  'confused':'\ud83d\ude15',
  'congratulations':'\u3297\ufe0f',
  'construction':'\ud83d\udea7',
  'construction_worker_man':'\ud83d\udc77',
  'construction_worker_woman':'\ud83d\udc77&zwj;\u2640\ufe0f',
  'control_knobs':'\ud83c\udf9b',
  'convenience_store':'\ud83c\udfea',
  'cookie':'\ud83c\udf6a',
  'cool':'\ud83c\udd92',
  'policeman':'\ud83d\udc6e',
  'copyright':'\u00a9\ufe0f',
  'corn':'\ud83c\udf3d',
  'couch_and_lamp':'\ud83d\udecb',
  'couple':'\ud83d\udc6b',
  'couple_with_heart_woman_man':'\ud83d\udc91',
  'couple_with_heart_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68',
  'couple_with_heart_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69',
  'couplekiss_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68',
  'couplekiss_man_woman':'\ud83d\udc8f',
  'couplekiss_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69',
  'cow':'\ud83d\udc2e',
  'cow2':'\ud83d\udc04',
  'cowboy_hat_face':'\ud83e\udd20',
  'crab':'\ud83e\udd80',
  'crayon':'\ud83d\udd8d',
  'credit_card':'\ud83d\udcb3',
  'crescent_moon':'\ud83c\udf19',
  'cricket':'\ud83c\udfcf',
  'crocodile':'\ud83d\udc0a',
  'croissant':'\ud83e\udd50',
  'crossed_fingers':'\ud83e\udd1e',
  'crossed_flags':'\ud83c\udf8c',
  'crossed_swords':'\u2694\ufe0f',
  'crown':'\ud83d\udc51',
  'cry':'\ud83d\ude22',
  'crying_cat_face':'\ud83d\ude3f',
  'crystal_ball':'\ud83d\udd2e',
  'cucumber':'\ud83e\udd52',
  'cupid':'\ud83d\udc98',
  'curly_loop':'\u27b0',
  'currency_exchange':'\ud83d\udcb1',
  'curry':'\ud83c\udf5b',
  'custard':'\ud83c\udf6e',
  'customs':'\ud83d\udec3',
  'cyclone':'\ud83c\udf00',
  'dagger':'\ud83d\udde1',
  'dancer':'\ud83d\udc83',
  'dancing_women':'\ud83d\udc6f',
  'dancing_men':'\ud83d\udc6f&zwj;\u2642\ufe0f',
  'dango':'\ud83c\udf61',
  'dark_sunglasses':'\ud83d\udd76',
  'dart':'\ud83c\udfaf',
  'dash':'\ud83d\udca8',
  'date':'\ud83d\udcc5',
  'deciduous_tree':'\ud83c\udf33',
  'deer':'\ud83e\udd8c',
  'department_store':'\ud83c\udfec',
  'derelict_house':'\ud83c\udfda',
  'desert':'\ud83c\udfdc',
  'desert_island':'\ud83c\udfdd',
  'desktop_computer':'\ud83d\udda5',
  'male_detective':'\ud83d\udd75\ufe0f',
  'diamond_shape_with_a_dot_inside':'\ud83d\udca0',
  'diamonds':'\u2666\ufe0f',
  'disappointed':'\ud83d\ude1e',
  'disappointed_relieved':'\ud83d\ude25',
  'dizzy':'\ud83d\udcab',
  'dizzy_face':'\ud83d\ude35',
  'do_not_litter':'\ud83d\udeaf',
  'dog':'\ud83d\udc36',
  'dog2':'\ud83d\udc15',
  'dollar':'\ud83d\udcb5',
  'dolls':'\ud83c\udf8e',
  'dolphin':'\ud83d\udc2c',
  'door':'\ud83d\udeaa',
  'doughnut':'\ud83c\udf69',
  'dove':'\ud83d\udd4a',
  'dragon':'\ud83d\udc09',
  'dragon_face':'\ud83d\udc32',
  'dress':'\ud83d\udc57',
  'dromedary_camel':'\ud83d\udc2a',
  'drooling_face':'\ud83e\udd24',
  'droplet':'\ud83d\udca7',
  'drum':'\ud83e\udd41',
  'duck':'\ud83e\udd86',
  'dvd':'\ud83d\udcc0',
  'e-mail':'\ud83d\udce7',
  'eagle':'\ud83e\udd85',
  'ear':'\ud83d\udc42',
  'ear_of_rice':'\ud83c\udf3e',
  'earth_africa':'\ud83c\udf0d',
  'earth_americas':'\ud83c\udf0e',
  'earth_asia':'\ud83c\udf0f',
  'egg':'\ud83e\udd5a',
  'eggplant':'\ud83c\udf46',
  'eight_pointed_black_star':'\u2734\ufe0f',
  'eight_spoked_asterisk':'\u2733\ufe0f',
  'electric_plug':'\ud83d\udd0c',
  'elephant':'\ud83d\udc18',
  'email':'\u2709\ufe0f',
  'end':'\ud83d\udd1a',
  'envelope_with_arrow':'\ud83d\udce9',
  'euro':'\ud83d\udcb6',
  'european_castle':'\ud83c\udff0',
  'european_post_office':'\ud83c\udfe4',
  'evergreen_tree':'\ud83c\udf32',
  'exclamation':'\u2757\ufe0f',
  'expressionless':'\ud83d\ude11',
  'eye':'\ud83d\udc41',
  'eye_speech_bubble':'\ud83d\udc41&zwj;\ud83d\udde8',
  'eyeglasses':'\ud83d\udc53',
  'eyes':'\ud83d\udc40',
  'face_with_head_bandage':'\ud83e\udd15',
  'face_with_thermometer':'\ud83e\udd12',
  'fist_oncoming':'\ud83d\udc4a',
  'factory':'\ud83c\udfed',
  'fallen_leaf':'\ud83c\udf42',
  'family_man_woman_boy':'\ud83d\udc6a',
  'family_man_boy':'\ud83d\udc68&zwj;\ud83d\udc66',
  'family_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_girl':'\ud83d\udc68&zwj;\ud83d\udc67',
  'family_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_man_man_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66',
  'family_man_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_man_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67',
  'family_man_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_man_woman_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_man_woman_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
  'family_man_woman_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_man_woman_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc66',
  'family_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc67',
  'family_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'family_woman_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66',
  'family_woman_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
  'family_woman_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
  'family_woman_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
  'family_woman_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
  'fast_forward':'\u23e9',
  'fax':'\ud83d\udce0',
  'fearful':'\ud83d\ude28',
  'feet':'\ud83d\udc3e',
  'female_detective':'\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f',
  'ferris_wheel':'\ud83c\udfa1',
  'ferry':'\u26f4',
  'field_hockey':'\ud83c\udfd1',
  'file_cabinet':'\ud83d\uddc4',
  'file_folder':'\ud83d\udcc1',
  'film_projector':'\ud83d\udcfd',
  'film_strip':'\ud83c\udf9e',
  'fire':'\ud83d\udd25',
  'fire_engine':'\ud83d\ude92',
  'fireworks':'\ud83c\udf86',
  'first_quarter_moon':'\ud83c\udf13',
  'first_quarter_moon_with_face':'\ud83c\udf1b',
  'fish':'\ud83d\udc1f',
  'fish_cake':'\ud83c\udf65',
  'fishing_pole_and_fish':'\ud83c\udfa3',
  'fist_raised':'\u270a',
  'fist_left':'\ud83e\udd1b',
  'fist_right':'\ud83e\udd1c',
  'flags':'\ud83c\udf8f',
  'flashlight':'\ud83d\udd26',
  'fleur_de_lis':'\u269c\ufe0f',
  'flight_arrival':'\ud83d\udeec',
  'flight_departure':'\ud83d\udeeb',
  'floppy_disk':'\ud83d\udcbe',
  'flower_playing_cards':'\ud83c\udfb4',
  'flushed':'\ud83d\ude33',
  'fog':'\ud83c\udf2b',
  'foggy':'\ud83c\udf01',
  'football':'\ud83c\udfc8',
  'footprints':'\ud83d\udc63',
  'fork_and_knife':'\ud83c\udf74',
  'fountain':'\u26f2\ufe0f',
  'fountain_pen':'\ud83d\udd8b',
  'four_leaf_clover':'\ud83c\udf40',
  'fox_face':'\ud83e\udd8a',
  'framed_picture':'\ud83d\uddbc',
  'free':'\ud83c\udd93',
  'fried_egg':'\ud83c\udf73',
  'fried_shrimp':'\ud83c\udf64',
  'fries':'\ud83c\udf5f',
  'frog':'\ud83d\udc38',
  'frowning':'\ud83d\ude26',
  'frowning_face':'\u2639\ufe0f',
  'frowning_man':'\ud83d\ude4d&zwj;\u2642\ufe0f',
  'frowning_woman':'\ud83d\ude4d',
  'middle_finger':'\ud83d\udd95',
  'fuelpump':'\u26fd\ufe0f',
  'full_moon':'\ud83c\udf15',
  'full_moon_with_face':'\ud83c\udf1d',
  'funeral_urn':'\u26b1\ufe0f',
  'game_die':'\ud83c\udfb2',
  'gear':'\u2699\ufe0f',
  'gem':'\ud83d\udc8e',
  'gemini':'\u264a\ufe0f',
  'ghost':'\ud83d\udc7b',
  'gift':'\ud83c\udf81',
  'gift_heart':'\ud83d\udc9d',
  'girl':'\ud83d\udc67',
  'globe_with_meridians':'\ud83c\udf10',
  'goal_net':'\ud83e\udd45',
  'goat':'\ud83d\udc10',
  'golf':'\u26f3\ufe0f',
  'golfing_man':'\ud83c\udfcc\ufe0f',
  'golfing_woman':'\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f',
  'gorilla':'\ud83e\udd8d',
  'grapes':'\ud83c\udf47',
  'green_apple':'\ud83c\udf4f',
  'green_book':'\ud83d\udcd7',
  'green_heart':'\ud83d\udc9a',
  'green_salad':'\ud83e\udd57',
  'grey_exclamation':'\u2755',
  'grey_question':'\u2754',
  'grimacing':'\ud83d\ude2c',
  'grin':'\ud83d\ude01',
  'grinning':'\ud83d\ude00',
  'guardsman':'\ud83d\udc82',
  'guardswoman':'\ud83d\udc82&zwj;\u2640\ufe0f',
  'guitar':'\ud83c\udfb8',
  'gun':'\ud83d\udd2b',
  'haircut_woman':'\ud83d\udc87',
  'haircut_man':'\ud83d\udc87&zwj;\u2642\ufe0f',
  'hamburger':'\ud83c\udf54',
  'hammer':'\ud83d\udd28',
  'hammer_and_pick':'\u2692',
  'hammer_and_wrench':'\ud83d\udee0',
  'hamster':'\ud83d\udc39',
  'hand':'\u270b',
  'handbag':'\ud83d\udc5c',
  'handshake':'\ud83e\udd1d',
  'hankey':'\ud83d\udca9',
  'hatched_chick':'\ud83d\udc25',
  'hatching_chick':'\ud83d\udc23',
  'headphones':'\ud83c\udfa7',
  'hear_no_evil':'\ud83d\ude49',
  'heart':'\u2764\ufe0f',
  'heart_decoration':'\ud83d\udc9f',
  'heart_eyes':'\ud83d\ude0d',
  'heart_eyes_cat':'\ud83d\ude3b',
  'heartbeat':'\ud83d\udc93',
  'heartpulse':'\ud83d\udc97',
  'hearts':'\u2665\ufe0f',
  'heavy_check_mark':'\u2714\ufe0f',
  'heavy_division_sign':'\u2797',
  'heavy_dollar_sign':'\ud83d\udcb2',
  'heavy_heart_exclamation':'\u2763\ufe0f',
  'heavy_minus_sign':'\u2796',
  'heavy_multiplication_x':'\u2716\ufe0f',
  'heavy_plus_sign':'\u2795',
  'helicopter':'\ud83d\ude81',
  'herb':'\ud83c\udf3f',
  'hibiscus':'\ud83c\udf3a',
  'high_brightness':'\ud83d\udd06',
  'high_heel':'\ud83d\udc60',
  'hocho':'\ud83d\udd2a',
  'hole':'\ud83d\udd73',
  'honey_pot':'\ud83c\udf6f',
  'horse':'\ud83d\udc34',
  'horse_racing':'\ud83c\udfc7',
  'hospital':'\ud83c\udfe5',
  'hot_pepper':'\ud83c\udf36',
  'hotdog':'\ud83c\udf2d',
  'hotel':'\ud83c\udfe8',
  'hotsprings':'\u2668\ufe0f',
  'hourglass':'\u231b\ufe0f',
  'hourglass_flowing_sand':'\u23f3',
  'house':'\ud83c\udfe0',
  'house_with_garden':'\ud83c\udfe1',
  'houses':'\ud83c\udfd8',
  'hugs':'\ud83e\udd17',
  'hushed':'\ud83d\ude2f',
  'ice_cream':'\ud83c\udf68',
  'ice_hockey':'\ud83c\udfd2',
  'ice_skate':'\u26f8',
  'icecream':'\ud83c\udf66',
  'id':'\ud83c\udd94',
  'ideograph_advantage':'\ud83c\ude50',
  'imp':'\ud83d\udc7f',
  'inbox_tray':'\ud83d\udce5',
  'incoming_envelope':'\ud83d\udce8',
  'tipping_hand_woman':'\ud83d\udc81',
  'information_source':'\u2139\ufe0f',
  'innocent':'\ud83d\ude07',
  'interrobang':'\u2049\ufe0f',
  'iphone':'\ud83d\udcf1',
  'izakaya_lantern':'\ud83c\udfee',
  'jack_o_lantern':'\ud83c\udf83',
  'japan':'\ud83d\uddfe',
  'japanese_castle':'\ud83c\udfef',
  'japanese_goblin':'\ud83d\udc7a',
  'japanese_ogre':'\ud83d\udc79',
  'jeans':'\ud83d\udc56',
  'joy':'\ud83d\ude02',
  'joy_cat':'\ud83d\ude39',
  'joystick':'\ud83d\udd79',
  'kaaba':'\ud83d\udd4b',
  'key':'\ud83d\udd11',
  'keyboard':'\u2328\ufe0f',
  'keycap_ten':'\ud83d\udd1f',
  'kick_scooter':'\ud83d\udef4',
  'kimono':'\ud83d\udc58',
  'kiss':'\ud83d\udc8b',
  'kissing':'\ud83d\ude17',
  'kissing_cat':'\ud83d\ude3d',
  'kissing_closed_eyes':'\ud83d\ude1a',
  'kissing_heart':'\ud83d\ude18',
  'kissing_smiling_eyes':'\ud83d\ude19',
  'kiwi_fruit':'\ud83e\udd5d',
  'koala':'\ud83d\udc28',
  'koko':'\ud83c\ude01',
  'label':'\ud83c\udff7',
  'large_blue_circle':'\ud83d\udd35',
  'large_blue_diamond':'\ud83d\udd37',
  'large_orange_diamond':'\ud83d\udd36',
  'last_quarter_moon':'\ud83c\udf17',
  'last_quarter_moon_with_face':'\ud83c\udf1c',
  'latin_cross':'\u271d\ufe0f',
  'laughing':'\ud83d\ude06',
  'leaves':'\ud83c\udf43',
  'ledger':'\ud83d\udcd2',
  'left_luggage':'\ud83d\udec5',
  'left_right_arrow':'\u2194\ufe0f',
  'leftwards_arrow_with_hook':'\u21a9\ufe0f',
  'lemon':'\ud83c\udf4b',
  'leo':'\u264c\ufe0f',
  'leopard':'\ud83d\udc06',
  'level_slider':'\ud83c\udf9a',
  'libra':'\u264e\ufe0f',
  'light_rail':'\ud83d\ude88',
  'link':'\ud83d\udd17',
  'lion':'\ud83e\udd81',
  'lips':'\ud83d\udc44',
  'lipstick':'\ud83d\udc84',
  'lizard':'\ud83e\udd8e',
  'lock':'\ud83d\udd12',
  'lock_with_ink_pen':'\ud83d\udd0f',
  'lollipop':'\ud83c\udf6d',
  'loop':'\u27bf',
  'loud_sound':'\ud83d\udd0a',
  'loudspeaker':'\ud83d\udce2',
  'love_hotel':'\ud83c\udfe9',
  'love_letter':'\ud83d\udc8c',
  'low_brightness':'\ud83d\udd05',
  'lying_face':'\ud83e\udd25',
  'm':'\u24c2\ufe0f',
  'mag':'\ud83d\udd0d',
  'mag_right':'\ud83d\udd0e',
  'mahjong':'\ud83c\udc04\ufe0f',
  'mailbox':'\ud83d\udceb',
  'mailbox_closed':'\ud83d\udcea',
  'mailbox_with_mail':'\ud83d\udcec',
  'mailbox_with_no_mail':'\ud83d\udced',
  'man':'\ud83d\udc68',
  'man_artist':'\ud83d\udc68&zwj;\ud83c\udfa8',
  'man_astronaut':'\ud83d\udc68&zwj;\ud83d\ude80',
  'man_cartwheeling':'\ud83e\udd38&zwj;\u2642\ufe0f',
  'man_cook':'\ud83d\udc68&zwj;\ud83c\udf73',
  'man_dancing':'\ud83d\udd7a',
  'man_facepalming':'\ud83e\udd26&zwj;\u2642\ufe0f',
  'man_factory_worker':'\ud83d\udc68&zwj;\ud83c\udfed',
  'man_farmer':'\ud83d\udc68&zwj;\ud83c\udf3e',
  'man_firefighter':'\ud83d\udc68&zwj;\ud83d\ude92',
  'man_health_worker':'\ud83d\udc68&zwj;\u2695\ufe0f',
  'man_in_tuxedo':'\ud83e\udd35',
  'man_judge':'\ud83d\udc68&zwj;\u2696\ufe0f',
  'man_juggling':'\ud83e\udd39&zwj;\u2642\ufe0f',
  'man_mechanic':'\ud83d\udc68&zwj;\ud83d\udd27',
  'man_office_worker':'\ud83d\udc68&zwj;\ud83d\udcbc',
  'man_pilot':'\ud83d\udc68&zwj;\u2708\ufe0f',
  'man_playing_handball':'\ud83e\udd3e&zwj;\u2642\ufe0f',
  'man_playing_water_polo':'\ud83e\udd3d&zwj;\u2642\ufe0f',
  'man_scientist':'\ud83d\udc68&zwj;\ud83d\udd2c',
  'man_shrugging':'\ud83e\udd37&zwj;\u2642\ufe0f',
  'man_singer':'\ud83d\udc68&zwj;\ud83c\udfa4',
  'man_student':'\ud83d\udc68&zwj;\ud83c\udf93',
  'man_teacher':'\ud83d\udc68&zwj;\ud83c\udfeb',
  'man_technologist':'\ud83d\udc68&zwj;\ud83d\udcbb',
  'man_with_gua_pi_mao':'\ud83d\udc72',
  'man_with_turban':'\ud83d\udc73',
  'tangerine':'\ud83c\udf4a',
  'mans_shoe':'\ud83d\udc5e',
  'mantelpiece_clock':'\ud83d\udd70',
  'maple_leaf':'\ud83c\udf41',
  'martial_arts_uniform':'\ud83e\udd4b',
  'mask':'\ud83d\ude37',
  'massage_woman':'\ud83d\udc86',
  'massage_man':'\ud83d\udc86&zwj;\u2642\ufe0f',
  'meat_on_bone':'\ud83c\udf56',
  'medal_military':'\ud83c\udf96',
  'medal_sports':'\ud83c\udfc5',
  'mega':'\ud83d\udce3',
  'melon':'\ud83c\udf48',
  'memo':'\ud83d\udcdd',
  'men_wrestling':'\ud83e\udd3c&zwj;\u2642\ufe0f',
  'menorah':'\ud83d\udd4e',
  'mens':'\ud83d\udeb9',
  'metal':'\ud83e\udd18',
  'metro':'\ud83d\ude87',
  'microphone':'\ud83c\udfa4',
  'microscope':'\ud83d\udd2c',
  'milk_glass':'\ud83e\udd5b',
  'milky_way':'\ud83c\udf0c',
  'minibus':'\ud83d\ude90',
  'minidisc':'\ud83d\udcbd',
  'mobile_phone_off':'\ud83d\udcf4',
  'money_mouth_face':'\ud83e\udd11',
  'money_with_wings':'\ud83d\udcb8',
  'moneybag':'\ud83d\udcb0',
  'monkey':'\ud83d\udc12',
  'monkey_face':'\ud83d\udc35',
  'monorail':'\ud83d\ude9d',
  'moon':'\ud83c\udf14',
  'mortar_board':'\ud83c\udf93',
  'mosque':'\ud83d\udd4c',
  'motor_boat':'\ud83d\udee5',
  'motor_scooter':'\ud83d\udef5',
  'motorcycle':'\ud83c\udfcd',
  'motorway':'\ud83d\udee3',
  'mount_fuji':'\ud83d\uddfb',
  'mountain':'\u26f0',
  'mountain_biking_man':'\ud83d\udeb5',
  'mountain_biking_woman':'\ud83d\udeb5&zwj;\u2640\ufe0f',
  'mountain_cableway':'\ud83d\udea0',
  'mountain_railway':'\ud83d\ude9e',
  'mountain_snow':'\ud83c\udfd4',
  'mouse':'\ud83d\udc2d',
  'mouse2':'\ud83d\udc01',
  'movie_camera':'\ud83c\udfa5',
  'moyai':'\ud83d\uddff',
  'mrs_claus':'\ud83e\udd36',
  'muscle':'\ud83d\udcaa',
  'mushroom':'\ud83c\udf44',
  'musical_keyboard':'\ud83c\udfb9',
  'musical_note':'\ud83c\udfb5',
  'musical_score':'\ud83c\udfbc',
  'mute':'\ud83d\udd07',
  'nail_care':'\ud83d\udc85',
  'name_badge':'\ud83d\udcdb',
  'national_park':'\ud83c\udfde',
  'nauseated_face':'\ud83e\udd22',
  'necktie':'\ud83d\udc54',
  'negative_squared_cross_mark':'\u274e',
  'nerd_face':'\ud83e\udd13',
  'neutral_face':'\ud83d\ude10',
  'new':'\ud83c\udd95',
  'new_moon':'\ud83c\udf11',
  'new_moon_with_face':'\ud83c\udf1a',
  'newspaper':'\ud83d\udcf0',
  'newspaper_roll':'\ud83d\uddde',
  'next_track_button':'\u23ed',
  'ng':'\ud83c\udd96',
  'no_good_man':'\ud83d\ude45&zwj;\u2642\ufe0f',
  'no_good_woman':'\ud83d\ude45',
  'night_with_stars':'\ud83c\udf03',
  'no_bell':'\ud83d\udd15',
  'no_bicycles':'\ud83d\udeb3',
  'no_entry':'\u26d4\ufe0f',
  'no_entry_sign':'\ud83d\udeab',
  'no_mobile_phones':'\ud83d\udcf5',
  'no_mouth':'\ud83d\ude36',
  'no_pedestrians':'\ud83d\udeb7',
  'no_smoking':'\ud83d\udead',
  'non-potable_water':'\ud83d\udeb1',
  'nose':'\ud83d\udc43',
  'notebook':'\ud83d\udcd3',
  'notebook_with_decorative_cover':'\ud83d\udcd4',
  'notes':'\ud83c\udfb6',
  'nut_and_bolt':'\ud83d\udd29',
  'o':'\u2b55\ufe0f',
  'o2':'\ud83c\udd7e\ufe0f',
  'ocean':'\ud83c\udf0a',
  'octopus':'\ud83d\udc19',
  'oden':'\ud83c\udf62',
  'office':'\ud83c\udfe2',
  'oil_drum':'\ud83d\udee2',
  'ok':'\ud83c\udd97',
  'ok_hand':'\ud83d\udc4c',
  'ok_man':'\ud83d\ude46&zwj;\u2642\ufe0f',
  'ok_woman':'\ud83d\ude46',
  'old_key':'\ud83d\udddd',
  'older_man':'\ud83d\udc74',
  'older_woman':'\ud83d\udc75',
  'om':'\ud83d\udd49',
  'on':'\ud83d\udd1b',
  'oncoming_automobile':'\ud83d\ude98',
  'oncoming_bus':'\ud83d\ude8d',
  'oncoming_police_car':'\ud83d\ude94',
  'oncoming_taxi':'\ud83d\ude96',
  'open_file_folder':'\ud83d\udcc2',
  'open_hands':'\ud83d\udc50',
  'open_mouth':'\ud83d\ude2e',
  'open_umbrella':'\u2602\ufe0f',
  'ophiuchus':'\u26ce',
  'orange_book':'\ud83d\udcd9',
  'orthodox_cross':'\u2626\ufe0f',
  'outbox_tray':'\ud83d\udce4',
  'owl':'\ud83e\udd89',
  'ox':'\ud83d\udc02',
  'package':'\ud83d\udce6',
  'page_facing_up':'\ud83d\udcc4',
  'page_with_curl':'\ud83d\udcc3',
  'pager':'\ud83d\udcdf',
  'paintbrush':'\ud83d\udd8c',
  'palm_tree':'\ud83c\udf34',
  'pancakes':'\ud83e\udd5e',
  'panda_face':'\ud83d\udc3c',
  'paperclip':'\ud83d\udcce',
  'paperclips':'\ud83d\udd87',
  'parasol_on_ground':'\u26f1',
  'parking':'\ud83c\udd7f\ufe0f',
  'part_alternation_mark':'\u303d\ufe0f',
  'partly_sunny':'\u26c5\ufe0f',
  'passenger_ship':'\ud83d\udef3',
  'passport_control':'\ud83d\udec2',
  'pause_button':'\u23f8',
  'peace_symbol':'\u262e\ufe0f',
  'peach':'\ud83c\udf51',
  'peanuts':'\ud83e\udd5c',
  'pear':'\ud83c\udf50',
  'pen':'\ud83d\udd8a',
  'pencil2':'\u270f\ufe0f',
  'penguin':'\ud83d\udc27',
  'pensive':'\ud83d\ude14',
  'performing_arts':'\ud83c\udfad',
  'persevere':'\ud83d\ude23',
  'person_fencing':'\ud83e\udd3a',
  'pouting_woman':'\ud83d\ude4e',
  'phone':'\u260e\ufe0f',
  'pick':'\u26cf',
  'pig':'\ud83d\udc37',
  'pig2':'\ud83d\udc16',
  'pig_nose':'\ud83d\udc3d',
  'pill':'\ud83d\udc8a',
  'pineapple':'\ud83c\udf4d',
  'ping_pong':'\ud83c\udfd3',
  'pisces':'\u2653\ufe0f',
  'pizza':'\ud83c\udf55',
  'place_of_worship':'\ud83d\uded0',
  'plate_with_cutlery':'\ud83c\udf7d',
  'play_or_pause_button':'\u23ef',
  'point_down':'\ud83d\udc47',
  'point_left':'\ud83d\udc48',
  'point_right':'\ud83d\udc49',
  'point_up':'\u261d\ufe0f',
  'point_up_2':'\ud83d\udc46',
  'police_car':'\ud83d\ude93',
  'policewoman':'\ud83d\udc6e&zwj;\u2640\ufe0f',
  'poodle':'\ud83d\udc29',
  'popcorn':'\ud83c\udf7f',
  'post_office':'\ud83c\udfe3',
  'postal_horn':'\ud83d\udcef',
  'postbox':'\ud83d\udcee',
  'potable_water':'\ud83d\udeb0',
  'potato':'\ud83e\udd54',
  'pouch':'\ud83d\udc5d',
  'poultry_leg':'\ud83c\udf57',
  'pound':'\ud83d\udcb7',
  'rage':'\ud83d\ude21',
  'pouting_cat':'\ud83d\ude3e',
  'pouting_man':'\ud83d\ude4e&zwj;\u2642\ufe0f',
  'pray':'\ud83d\ude4f',
  'prayer_beads':'\ud83d\udcff',
  'pregnant_woman':'\ud83e\udd30',
  'previous_track_button':'\u23ee',
  'prince':'\ud83e\udd34',
  'princess':'\ud83d\udc78',
  'printer':'\ud83d\udda8',
  'purple_heart':'\ud83d\udc9c',
  'purse':'\ud83d\udc5b',
  'pushpin':'\ud83d\udccc',
  'put_litter_in_its_place':'\ud83d\udeae',
  'question':'\u2753',
  'rabbit':'\ud83d\udc30',
  'rabbit2':'\ud83d\udc07',
  'racehorse':'\ud83d\udc0e',
  'racing_car':'\ud83c\udfce',
  'radio':'\ud83d\udcfb',
  'radio_button':'\ud83d\udd18',
  'radioactive':'\u2622\ufe0f',
  'railway_car':'\ud83d\ude83',
  'railway_track':'\ud83d\udee4',
  'rainbow':'\ud83c\udf08',
  'rainbow_flag':'\ud83c\udff3\ufe0f&zwj;\ud83c\udf08',
  'raised_back_of_hand':'\ud83e\udd1a',
  'raised_hand_with_fingers_splayed':'\ud83d\udd90',
  'raised_hands':'\ud83d\ude4c',
  'raising_hand_woman':'\ud83d\ude4b',
  'raising_hand_man':'\ud83d\ude4b&zwj;\u2642\ufe0f',
  'ram':'\ud83d\udc0f',
  'ramen':'\ud83c\udf5c',
  'rat':'\ud83d\udc00',
  'record_button':'\u23fa',
  'recycle':'\u267b\ufe0f',
  'red_circle':'\ud83d\udd34',
  'registered':'\u00ae\ufe0f',
  'relaxed':'\u263a\ufe0f',
  'relieved':'\ud83d\ude0c',
  'reminder_ribbon':'\ud83c\udf97',
  'repeat':'\ud83d\udd01',
  'repeat_one':'\ud83d\udd02',
  'rescue_worker_helmet':'\u26d1',
  'restroom':'\ud83d\udebb',
  'revolving_hearts':'\ud83d\udc9e',
  'rewind':'\u23ea',
  'rhinoceros':'\ud83e\udd8f',
  'ribbon':'\ud83c\udf80',
  'rice':'\ud83c\udf5a',
  'rice_ball':'\ud83c\udf59',
  'rice_cracker':'\ud83c\udf58',
  'rice_scene':'\ud83c\udf91',
  'right_anger_bubble':'\ud83d\uddef',
  'ring':'\ud83d\udc8d',
  'robot':'\ud83e\udd16',
  'rocket':'\ud83d\ude80',
  'rofl':'\ud83e\udd23',
  'roll_eyes':'\ud83d\ude44',
  'roller_coaster':'\ud83c\udfa2',
  'rooster':'\ud83d\udc13',
  'rose':'\ud83c\udf39',
  'rosette':'\ud83c\udff5',
  'rotating_light':'\ud83d\udea8',
  'round_pushpin':'\ud83d\udccd',
  'rowing_man':'\ud83d\udea3',
  'rowing_woman':'\ud83d\udea3&zwj;\u2640\ufe0f',
  'rugby_football':'\ud83c\udfc9',
  'running_man':'\ud83c\udfc3',
  'running_shirt_with_sash':'\ud83c\udfbd',
  'running_woman':'\ud83c\udfc3&zwj;\u2640\ufe0f',
  'sa':'\ud83c\ude02\ufe0f',
  'sagittarius':'\u2650\ufe0f',
  'sake':'\ud83c\udf76',
  'sandal':'\ud83d\udc61',
  'santa':'\ud83c\udf85',
  'satellite':'\ud83d\udce1',
  'saxophone':'\ud83c\udfb7',
  'school':'\ud83c\udfeb',
  'school_satchel':'\ud83c\udf92',
  'scissors':'\u2702\ufe0f',
  'scorpion':'\ud83e\udd82',
  'scorpius':'\u264f\ufe0f',
  'scream':'\ud83d\ude31',
  'scream_cat':'\ud83d\ude40',
  'scroll':'\ud83d\udcdc',
  'seat':'\ud83d\udcba',
  'secret':'\u3299\ufe0f',
  'see_no_evil':'\ud83d\ude48',
  'seedling':'\ud83c\udf31',
  'selfie':'\ud83e\udd33',
  'shallow_pan_of_food':'\ud83e\udd58',
  'shamrock':'\u2618\ufe0f',
  'shark':'\ud83e\udd88',
  'shaved_ice':'\ud83c\udf67',
  'sheep':'\ud83d\udc11',
  'shell':'\ud83d\udc1a',
  'shield':'\ud83d\udee1',
  'shinto_shrine':'\u26e9',
  'ship':'\ud83d\udea2',
  'shirt':'\ud83d\udc55',
  'shopping':'\ud83d\udecd',
  'shopping_cart':'\ud83d\uded2',
  'shower':'\ud83d\udebf',
  'shrimp':'\ud83e\udd90',
  'signal_strength':'\ud83d\udcf6',
  'six_pointed_star':'\ud83d\udd2f',
  'ski':'\ud83c\udfbf',
  'skier':'\u26f7',
  'skull':'\ud83d\udc80',
  'skull_and_crossbones':'\u2620\ufe0f',
  'sleeping':'\ud83d\ude34',
  'sleeping_bed':'\ud83d\udecc',
  'sleepy':'\ud83d\ude2a',
  'slightly_frowning_face':'\ud83d\ude41',
  'slightly_smiling_face':'\ud83d\ude42',
  'slot_machine':'\ud83c\udfb0',
  'small_airplane':'\ud83d\udee9',
  'small_blue_diamond':'\ud83d\udd39',
  'small_orange_diamond':'\ud83d\udd38',
  'small_red_triangle':'\ud83d\udd3a',
  'small_red_triangle_down':'\ud83d\udd3b',
  'smile':'\ud83d\ude04',
  'smile_cat':'\ud83d\ude38',
  'smiley':'\ud83d\ude03',
  'smiley_cat':'\ud83d\ude3a',
  'smiling_imp':'\ud83d\ude08',
  'smirk':'\ud83d\ude0f',
  'smirk_cat':'\ud83d\ude3c',
  'smoking':'\ud83d\udeac',
  'snail':'\ud83d\udc0c',
  'snake':'\ud83d\udc0d',
  'sneezing_face':'\ud83e\udd27',
  'snowboarder':'\ud83c\udfc2',
  'snowflake':'\u2744\ufe0f',
  'snowman':'\u26c4\ufe0f',
  'snowman_with_snow':'\u2603\ufe0f',
  'sob':'\ud83d\ude2d',
  'soccer':'\u26bd\ufe0f',
  'soon':'\ud83d\udd1c',
  'sos':'\ud83c\udd98',
  'sound':'\ud83d\udd09',
  'space_invader':'\ud83d\udc7e',
  'spades':'\u2660\ufe0f',
  'spaghetti':'\ud83c\udf5d',
  'sparkle':'\u2747\ufe0f',
  'sparkler':'\ud83c\udf87',
  'sparkles':'\u2728',
  'sparkling_heart':'\ud83d\udc96',
  'speak_no_evil':'\ud83d\ude4a',
  'speaker':'\ud83d\udd08',
  'speaking_head':'\ud83d\udde3',
  'speech_balloon':'\ud83d\udcac',
  'speedboat':'\ud83d\udea4',
  'spider':'\ud83d\udd77',
  'spider_web':'\ud83d\udd78',
  'spiral_calendar':'\ud83d\uddd3',
  'spiral_notepad':'\ud83d\uddd2',
  'spoon':'\ud83e\udd44',
  'squid':'\ud83e\udd91',
  'stadium':'\ud83c\udfdf',
  'star':'\u2b50\ufe0f',
  'star2':'\ud83c\udf1f',
  'star_and_crescent':'\u262a\ufe0f',
  'star_of_david':'\u2721\ufe0f',
  'stars':'\ud83c\udf20',
  'station':'\ud83d\ude89',
  'statue_of_liberty':'\ud83d\uddfd',
  'steam_locomotive':'\ud83d\ude82',
  'stew':'\ud83c\udf72',
  'stop_button':'\u23f9',
  'stop_sign':'\ud83d\uded1',
  'stopwatch':'\u23f1',
  'straight_ruler':'\ud83d\udccf',
  'strawberry':'\ud83c\udf53',
  'stuck_out_tongue':'\ud83d\ude1b',
  'stuck_out_tongue_closed_eyes':'\ud83d\ude1d',
  'stuck_out_tongue_winking_eye':'\ud83d\ude1c',
  'studio_microphone':'\ud83c\udf99',
  'stuffed_flatbread':'\ud83e\udd59',
  'sun_behind_large_cloud':'\ud83c\udf25',
  'sun_behind_rain_cloud':'\ud83c\udf26',
  'sun_behind_small_cloud':'\ud83c\udf24',
  'sun_with_face':'\ud83c\udf1e',
  'sunflower':'\ud83c\udf3b',
  'sunglasses':'\ud83d\ude0e',
  'sunny':'\u2600\ufe0f',
  'sunrise':'\ud83c\udf05',
  'sunrise_over_mountains':'\ud83c\udf04',
  'surfing_man':'\ud83c\udfc4',
  'surfing_woman':'\ud83c\udfc4&zwj;\u2640\ufe0f',
  'sushi':'\ud83c\udf63',
  'suspension_railway':'\ud83d\ude9f',
  'sweat':'\ud83d\ude13',
  'sweat_drops':'\ud83d\udca6',
  'sweat_smile':'\ud83d\ude05',
  'sweet_potato':'\ud83c\udf60',
  'swimming_man':'\ud83c\udfca',
  'swimming_woman':'\ud83c\udfca&zwj;\u2640\ufe0f',
  'symbols':'\ud83d\udd23',
  'synagogue':'\ud83d\udd4d',
  'syringe':'\ud83d\udc89',
  'taco':'\ud83c\udf2e',
  'tada':'\ud83c\udf89',
  'tanabata_tree':'\ud83c\udf8b',
  'taurus':'\u2649\ufe0f',
  'taxi':'\ud83d\ude95',
  'tea':'\ud83c\udf75',
  'telephone_receiver':'\ud83d\udcde',
  'telescope':'\ud83d\udd2d',
  'tennis':'\ud83c\udfbe',
  'tent':'\u26fa\ufe0f',
  'thermometer':'\ud83c\udf21',
  'thinking':'\ud83e\udd14',
  'thought_balloon':'\ud83d\udcad',
  'ticket':'\ud83c\udfab',
  'tickets':'\ud83c\udf9f',
  'tiger':'\ud83d\udc2f',
  'tiger2':'\ud83d\udc05',
  'timer_clock':'\u23f2',
  'tipping_hand_man':'\ud83d\udc81&zwj;\u2642\ufe0f',
  'tired_face':'\ud83d\ude2b',
  'tm':'\u2122\ufe0f',
  'toilet':'\ud83d\udebd',
  'tokyo_tower':'\ud83d\uddfc',
  'tomato':'\ud83c\udf45',
  'tongue':'\ud83d\udc45',
  'top':'\ud83d\udd1d',
  'tophat':'\ud83c\udfa9',
  'tornado':'\ud83c\udf2a',
  'trackball':'\ud83d\uddb2',
  'tractor':'\ud83d\ude9c',
  'traffic_light':'\ud83d\udea5',
  'train':'\ud83d\ude8b',
  'train2':'\ud83d\ude86',
  'tram':'\ud83d\ude8a',
  'triangular_flag_on_post':'\ud83d\udea9',
  'triangular_ruler':'\ud83d\udcd0',
  'trident':'\ud83d\udd31',
  'triumph':'\ud83d\ude24',
  'trolleybus':'\ud83d\ude8e',
  'trophy':'\ud83c\udfc6',
  'tropical_drink':'\ud83c\udf79',
  'tropical_fish':'\ud83d\udc20',
  'truck':'\ud83d\ude9a',
  'trumpet':'\ud83c\udfba',
  'tulip':'\ud83c\udf37',
  'tumbler_glass':'\ud83e\udd43',
  'turkey':'\ud83e\udd83',
  'turtle':'\ud83d\udc22',
  'tv':'\ud83d\udcfa',
  'twisted_rightwards_arrows':'\ud83d\udd00',
  'two_hearts':'\ud83d\udc95',
  'two_men_holding_hands':'\ud83d\udc6c',
  'two_women_holding_hands':'\ud83d\udc6d',
  'u5272':'\ud83c\ude39',
  'u5408':'\ud83c\ude34',
  'u55b6':'\ud83c\ude3a',
  'u6307':'\ud83c\ude2f\ufe0f',
  'u6708':'\ud83c\ude37\ufe0f',
  'u6709':'\ud83c\ude36',
  'u6e80':'\ud83c\ude35',
  'u7121':'\ud83c\ude1a\ufe0f',
  'u7533':'\ud83c\ude38',
  'u7981':'\ud83c\ude32',
  'u7a7a':'\ud83c\ude33',
  'umbrella':'\u2614\ufe0f',
  'unamused':'\ud83d\ude12',
  'underage':'\ud83d\udd1e',
  'unicorn':'\ud83e\udd84',
  'unlock':'\ud83d\udd13',
  'up':'\ud83c\udd99',
  'upside_down_face':'\ud83d\ude43',
  'v':'\u270c\ufe0f',
  'vertical_traffic_light':'\ud83d\udea6',
  'vhs':'\ud83d\udcfc',
  'vibration_mode':'\ud83d\udcf3',
  'video_camera':'\ud83d\udcf9',
  'video_game':'\ud83c\udfae',
  'violin':'\ud83c\udfbb',
  'virgo':'\u264d\ufe0f',
  'volcano':'\ud83c\udf0b',
  'volleyball':'\ud83c\udfd0',
  'vs':'\ud83c\udd9a',
  'vulcan_salute':'\ud83d\udd96',
  'walking_man':'\ud83d\udeb6',
  'walking_woman':'\ud83d\udeb6&zwj;\u2640\ufe0f',
  'waning_crescent_moon':'\ud83c\udf18',
  'waning_gibbous_moon':'\ud83c\udf16',
  'warning':'\u26a0\ufe0f',
  'wastebasket':'\ud83d\uddd1',
  'watch':'\u231a\ufe0f',
  'water_buffalo':'\ud83d\udc03',
  'watermelon':'\ud83c\udf49',
  'wave':'\ud83d\udc4b',
  'wavy_dash':'\u3030\ufe0f',
  'waxing_crescent_moon':'\ud83c\udf12',
  'wc':'\ud83d\udebe',
  'weary':'\ud83d\ude29',
  'wedding':'\ud83d\udc92',
  'weight_lifting_man':'\ud83c\udfcb\ufe0f',
  'weight_lifting_woman':'\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f',
  'whale':'\ud83d\udc33',
  'whale2':'\ud83d\udc0b',
  'wheel_of_dharma':'\u2638\ufe0f',
  'wheelchair':'\u267f\ufe0f',
  'white_check_mark':'\u2705',
  'white_circle':'\u26aa\ufe0f',
  'white_flag':'\ud83c\udff3\ufe0f',
  'white_flower':'\ud83d\udcae',
  'white_large_square':'\u2b1c\ufe0f',
  'white_medium_small_square':'\u25fd\ufe0f',
  'white_medium_square':'\u25fb\ufe0f',
  'white_small_square':'\u25ab\ufe0f',
  'white_square_button':'\ud83d\udd33',
  'wilted_flower':'\ud83e\udd40',
  'wind_chime':'\ud83c\udf90',
  'wind_face':'\ud83c\udf2c',
  'wine_glass':'\ud83c\udf77',
  'wink':'\ud83d\ude09',
  'wolf':'\ud83d\udc3a',
  'woman':'\ud83d\udc69',
  'woman_artist':'\ud83d\udc69&zwj;\ud83c\udfa8',
  'woman_astronaut':'\ud83d\udc69&zwj;\ud83d\ude80',
  'woman_cartwheeling':'\ud83e\udd38&zwj;\u2640\ufe0f',
  'woman_cook':'\ud83d\udc69&zwj;\ud83c\udf73',
  'woman_facepalming':'\ud83e\udd26&zwj;\u2640\ufe0f',
  'woman_factory_worker':'\ud83d\udc69&zwj;\ud83c\udfed',
  'woman_farmer':'\ud83d\udc69&zwj;\ud83c\udf3e',
  'woman_firefighter':'\ud83d\udc69&zwj;\ud83d\ude92',
  'woman_health_worker':'\ud83d\udc69&zwj;\u2695\ufe0f',
  'woman_judge':'\ud83d\udc69&zwj;\u2696\ufe0f',
  'woman_juggling':'\ud83e\udd39&zwj;\u2640\ufe0f',
  'woman_mechanic':'\ud83d\udc69&zwj;\ud83d\udd27',
  'woman_office_worker':'\ud83d\udc69&zwj;\ud83d\udcbc',
  'woman_pilot':'\ud83d\udc69&zwj;\u2708\ufe0f',
  'woman_playing_handball':'\ud83e\udd3e&zwj;\u2640\ufe0f',
  'woman_playing_water_polo':'\ud83e\udd3d&zwj;\u2640\ufe0f',
  'woman_scientist':'\ud83d\udc69&zwj;\ud83d\udd2c',
  'woman_shrugging':'\ud83e\udd37&zwj;\u2640\ufe0f',
  'woman_singer':'\ud83d\udc69&zwj;\ud83c\udfa4',
  'woman_student':'\ud83d\udc69&zwj;\ud83c\udf93',
  'woman_teacher':'\ud83d\udc69&zwj;\ud83c\udfeb',
  'woman_technologist':'\ud83d\udc69&zwj;\ud83d\udcbb',
  'woman_with_turban':'\ud83d\udc73&zwj;\u2640\ufe0f',
  'womans_clothes':'\ud83d\udc5a',
  'womans_hat':'\ud83d\udc52',
  'women_wrestling':'\ud83e\udd3c&zwj;\u2640\ufe0f',
  'womens':'\ud83d\udeba',
  'world_map':'\ud83d\uddfa',
  'worried':'\ud83d\ude1f',
  'wrench':'\ud83d\udd27',
  'writing_hand':'\u270d\ufe0f',
  'x':'\u274c',
  'yellow_heart':'\ud83d\udc9b',
  'yen':'\ud83d\udcb4',
  'yin_yang':'\u262f\ufe0f',
  'yum':'\ud83d\ude0b',
  'zap':'\u26a1\ufe0f',
  'zipper_mouth_face':'\ud83e\udd10',
  'zzz':'\ud83d\udca4',

  /* special emojis :P */
  'octocat':  '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
  'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
};

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */
showdown.Converter = function (converterOptions) {

  var
      /**
       * Options used by this converter
       * @private
       * @type {{}}
       */
      options = {},

      /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */
      langExtensions = [],

      /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */
      outputModifiers = [],

      /**
       * Event listeners
       * @private
       * @type {{}}
       */
      listeners = {},

      /**
       * The flavor set in this converter
       */
      setConvFlavor = setFlavor,

      /**
       * Metadata of the document
       * @type {{parsed: {}, raw: string, format: string}}
       */
      metadata = {
        parsed: {},
        raw: '',
        format: ''
      };

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor () {
    converterOptions = converterOptions || {};

    for (var gOpt in globalOptions) {
      if (globalOptions.hasOwnProperty(gOpt)) {
        options[gOpt] = globalOptions[gOpt];
      }
    }

    // Merge options
    if (typeof converterOptions === 'object') {
      for (var opt in converterOptions) {
        if (converterOptions.hasOwnProperty(opt)) {
          options[opt] = converterOptions[opt];
        }
      }
    } else {
      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
      ' was passed instead.');
    }

    if (options.extensions) {
      showdown.helper.forEach(options.extensions, _parseExtension);
    }
  }

  /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */
  function _parseExtension (ext, name) {

    name = name || null;
    // If it's a string, the extension was previously loaded
    if (showdown.helper.isString(ext)) {
      ext = showdown.helper.stdExtName(ext);
      name = ext;

      // LEGACY_SUPPORT CODE
      if (showdown.extensions[ext]) {
        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
          'Please inform the developer that the extension should be updated!');
        legacyExtensionLoading(showdown.extensions[ext], ext);
        return;
        // END LEGACY SUPPORT CODE

      } else if (!showdown.helper.isUndefined(extensions[ext])) {
        ext = extensions[ext];

      } else {
        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
      }
    }

    if (typeof ext === 'function') {
      ext = ext();
    }

    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExt = validate(ext, name);
    if (!validExt.valid) {
      throw Error(validExt.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {

        case 'lang':
          langExtensions.push(ext[i]);
          break;

        case 'output':
          outputModifiers.push(ext[i]);
          break;
      }
      if (ext[i].hasOwnProperty('listeners')) {
        for (var ln in ext[i].listeners) {
          if (ext[i].listeners.hasOwnProperty(ln)) {
            listen(ln, ext[i].listeners[ln]);
          }
        }
      }
    }

  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading (ext, name) {
    if (typeof ext === 'function') {
      ext = ext(new showdown.Converter());
    }
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }
    var valid = validate(ext, name);

    if (!valid.valid) {
      throw Error(valid.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {
        case 'lang':
          langExtensions.push(ext[i]);
          break;
        case 'output':
          outputModifiers.push(ext[i]);
          break;
        default:// should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */
  function listen (name, callback) {
    if (!showdown.helper.isString(name)) {
      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
    }

    if (typeof callback !== 'function') {
      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
    }

    if (!listeners.hasOwnProperty(name)) {
      listeners[name] = [];
    }
    listeners[name].push(callback);
  }

  function rTrimInputText (text) {
    var rsp = text.match(/^\s*/)[0].length,
        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
    return text.replace(rgx, '');
  }

  /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */
  this._dispatch = function dispatch (evtName, text, options, globals) {
    if (listeners.hasOwnProperty(evtName)) {
      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
        if (nText && typeof nText !== 'undefined') {
          text = nText;
        }
      }
    }
    return text;
  };

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */
  this.listen = function (name, callback) {
    listen(name, callback);
    return this;
  };

  /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */
  this.makeHtml = function (text) {
    //check if text is not falsy
    if (!text) {
      return text;
    }

    var globals = {
      gHtmlBlocks:     [],
      gHtmlMdBlocks:   [],
      gHtmlSpans:      [],
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this,
      ghCodeBlocks:    [],
      metadata: {
        parsed: {},
        raw: '',
        format: ''
      }
    };

    // This lets us use ¨ trema as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/¨/g, '¨T');

    // Replace $ with ¨D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '¨D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    // Stardardize line spaces
    text = text.replace(/\u00A0/g, '&nbsp;');

    if (options.smartIndentationFix) {
      text = rTrimInputText(text);
    }

    // Make sure text begins and ends with a couple of newlines:
    text = '\n\n' + text + '\n\n';

    // detab
    text = showdown.subParser('detab')(text, options, globals);

    /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */
    text = text.replace(/^[ \t]+$/mg, '');

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // run the sub parsers
    text = showdown.subParser('metadata')(text, options, globals);
    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('hashCodeTags')(text, options, globals);
    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
    text = showdown.subParser('blockGamut')(text, options, globals);
    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

    // attacklab: Restore dollar signs
    text = text.replace(/¨D/g, '$$');

    // attacklab: Restore tremas
    text = text.replace(/¨T/g, '¨');

    // render a complete html document instead of a partial if the option is enabled
    text = showdown.subParser('completeHTMLDocument')(text, options, globals);

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // update metadata
    metadata = globals.metadata;
    return text;
  };

  /**
   * Converts an HTML string into a markdown string
   * @param src
   * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
   * @returns {string}
   */
  this.makeMarkdown = this.makeMd = function (src, HTMLParser) {

    // replace \r\n with \n
    src = src.replace(/\r\n/g, '\n');
    src = src.replace(/\r/g, '\n'); // old macs

    // due to an edge case, we need to find this: > <
    // to prevent removing of non silent white spaces
    // ex: <em>this is</em> <strong>sparta</strong>
    src = src.replace(/>[ \t]+</, '>¨NBSP;<');

    if (!HTMLParser) {
      if (window && window.document) {
        HTMLParser = window.document;
      } else {
        throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
      }
    }

    var doc = HTMLParser.createElement('div');
    doc.innerHTML = src;

    var globals = {
      preList: substitutePreCodeTags(doc)
    };

    // remove all newlines and collapse spaces
    clean(doc);

    // some stuff, like accidental reference links must now be escaped
    // TODO
    // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

    var nodes = doc.childNodes,
        mdDoc = '';

    for (var i = 0; i < nodes.length; i++) {
      mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
    }

    function clean (node) {
      for (var n = 0; n < node.childNodes.length; ++n) {
        var child = node.childNodes[n];
        if (child.nodeType === 3) {
          if (!/\S/.test(child.nodeValue)) {
            node.removeChild(child);
            --n;
          } else {
            child.nodeValue = child.nodeValue.split('\n').join(' ');
            child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
          }
        } else if (child.nodeType === 1) {
          clean(child);
        }
      }
    }

    // find all pre tags and replace contents with placeholder
    // we need this so that we can remove all indentation from html
    // to ease up parsing
    function substitutePreCodeTags (doc) {

      var pres = doc.querySelectorAll('pre'),
          presPH = [];

      for (var i = 0; i < pres.length; ++i) {

        if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
          var content = pres[i].firstChild.innerHTML.trim(),
              language = pres[i].firstChild.getAttribute('data-language') || '';

          // if data-language attribute is not defined, then we look for class language-*
          if (language === '') {
            var classes = pres[i].firstChild.className.split(' ');
            for (var c = 0; c < classes.length; ++c) {
              var matches = classes[c].match(/^language-(.+)$/);
              if (matches !== null) {
                language = matches[1];
                break;
              }
            }
          }

          // unescape html entities in content
          content = showdown.helper.unescapeHTMLEntities(content);

          presPH.push(content);
          pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
        } else {
          presPH.push(pres[i].innerHTML);
          pres[i].innerHTML = '';
          pres[i].setAttribute('prenum', i.toString());
        }
      }
      return presPH;
    }

    return mdDoc;
  };

  /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */
  this.setOption = function (key, value) {
    options[key] = value;
  };

  /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */
  this.getOption = function (key) {
    return options[key];
  };

  /**
   * Get the options of this Converter instance
   * @returns {{}}
   */
  this.getOptions = function () {
    return options;
  };

  /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */
  this.addExtension = function (extension, name) {
    name = name || null;
    _parseExtension(extension, name);
  };

  /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */
  this.useExtension = function (extensionName) {
    _parseExtension(extensionName);
  };

  /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */
  this.setFlavor = function (name) {
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    var preset = flavor[name];
    setConvFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        options[option] = preset[option];
      }
    }
  };

  /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */
  this.getFlavor = function () {
    return setConvFlavor;
  };

  /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */
  this.removeExtension = function (extension) {
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var a = 0; a < extension.length; ++a) {
      var ext = extension[a];
      for (var i = 0; i < langExtensions.length; ++i) {
        if (langExtensions[i] === ext) {
          langExtensions[i].splice(i, 1);
        }
      }
      for (var ii = 0; ii < outputModifiers.length; ++i) {
        if (outputModifiers[ii] === ext) {
          outputModifiers[ii].splice(i, 1);
        }
      }
    }
  };

  /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */
  this.getAllExtensions = function () {
    return {
      language: langExtensions,
      output: outputModifiers
    };
  };

  /**
   * Get the metadata of the previously parsed document
   * @param raw
   * @returns {string|{}}
   */
  this.getMetadata = function (raw) {
    if (raw) {
      return metadata.raw;
    } else {
      return metadata.parsed;
    }
  };

  /**
   * Get the metadata format of the previously parsed document
   * @returns {string}
   */
  this.getMetadataFormat = function () {
    return metadata.format;
  };

  /**
   * Private: set a single key, value metadata pair
   * @param {string} key
   * @param {string} value
   */
  this._setMetadataPair = function (key, value) {
    metadata.parsed[key] = value;
  };

  /**
   * Private: set metadata format
   * @param {string} format
   */
  this._setMetadataFormat = function (format) {
    metadata.format = format;
  };

  /**
   * Private: set metadata raw text
   * @param {string} raw
   */
  this._setMetadataRaw = function (raw) {
    metadata.raw = raw;
  };
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, options, globals) {

  text = globals.converter._dispatch('anchors.before', text, options, globals);

  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
    if (showdown.helper.isUndefined(title)) {
      title = '';
    }
    linkId = linkId.toLowerCase();

    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';
    } else if (!url) {
      if (!linkId) {
        // lower-case and turn embedded newlines into spaces
        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
        url = globals.gUrls[linkId];
        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
          title = globals.gTitles[linkId];
        }
      } else {
        return wholeMatch;
      }
    }

    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);

    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
      title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    // optionLinksInNewWindow only applies
    // to external links. Hash links (#) open in same page
    if (options.openLinksInNewWindow && !/^#/.test(url)) {
      // escaped _
      result += ' rel="noopener noreferrer" target="¨E95Eblank"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

  // Next, inline-style links: [link text](url "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // normal cases
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

  // Lastly handle GithubMentions if option is enabled
  if (options.ghMentions) {
    text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
      if (escape === '\\') {
        return st + mentions;
      }

      //check if options.ghMentionsLink is a string
      if (!showdown.helper.isString(options.ghMentionsLink)) {
        throw new Error('ghMentionsLink option must be a string');
      }
      var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
          target = '';
      if (options.openLinksInNewWindow) {
        target = ' rel="noopener noreferrer" target="¨E95Eblank"';
      }
      return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
    });
  }

  text = globals.converter._dispatch('anchors.after', text, options, globals);
  return text;
});

// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

var simpleURLRegex  = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
    simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
    delimUrlRegex   = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,

    replaceLink = function (options) {
      return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
        link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        var lnkTxt = link,
            append = '',
            target = '',
            lmc    = leadingMagicChars || '',
            tmc    = trailingMagicChars || '';
        if (/^www\./i.test(link)) {
          link = link.replace(/^www\./i, 'http://www.');
        }
        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
          append = trailingPunctuation;
        }
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="¨E95Eblank"';
        }
        return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
      };
    },

    replaceMail = function (options, globals) {
      return function (wholeMatch, b, mail) {
        var href = 'mailto:';
        b = b || '';
        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
        if (options.encodeEmails) {
          href = showdown.helper.encodeEmailAddress(href + mail);
          mail = showdown.helper.encodeEmailAddress(mail);
        } else {
          href = href + mail;
        }
        return b + '<a href="' + href + '">' + mail + '</a>';
      };
    };

showdown.subParser('autoLinks', function (text, options, globals) {

  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

  text = text.replace(delimUrlRegex, replaceLink(options));
  text = text.replace(delimMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

  return text;
});

showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {

  if (!options.simplifiedAutoLink) {
    return text;
  }

  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

  if (options.excludeTrailingPunctuationFromURLs) {
    text = text.replace(simpleURLRegex2, replaceLink(options));
  } else {
    text = text.replace(simpleURLRegex, replaceLink(options));
  }
  text = text.replace(simpleMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {

  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

  // we parse blockquotes first so that we can have headings and hrs
  // inside blockquotes
  text = showdown.subParser('blockQuotes')(text, options, globals);
  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  text = showdown.subParser('horizontalRule')(text, options, globals);

  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('tables')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

  return text;
});

showdown.subParser('blockQuotes', function (text, options, globals) {

  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

  // add a couple extra lines after the text and endtext mark
  text = text + '\n\n';

  var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

  if (options.splitAdjacentBlockquotes) {
    rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
  }

  text = text.replace(rgx, function (bq) {
    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/¨0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '¨0');
      pre = pre.replace(/¨0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });

  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {

  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // strip sentinel
  text = text.replace(/¨0/, '');

  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
  return text;
});

/**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */
showdown.subParser('codeSpans', function (text, options, globals) {

  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

  if (typeof text === 'undefined') {
    text = '';
  }
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c, options, globals);
      c = m1 + '<code>' + c + '</code>';
      c = showdown.subParser('hashHTMLSpans')(c, options, globals);
      return c;
    }
  );

  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
  return text;
});

/**
 * Create a full HTML document from the processed markdown
 */
showdown.subParser('completeHTMLDocument', function (text, options, globals) {

  if (!options.completeHTMLDocument) {
    return text;
  }

  text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);

  var doctype = 'html',
      doctypeParsed = '<!DOCTYPE HTML>\n',
      title = '',
      charset = '<meta charset="utf-8">\n',
      lang = '',
      metadata = '';

  if (typeof globals.metadata.parsed.doctype !== 'undefined') {
    doctypeParsed = '<!DOCTYPE ' +  globals.metadata.parsed.doctype + '>\n';
    doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
    if (doctype === 'html' || doctype === 'html5') {
      charset = '<meta charset="utf-8">';
    }
  }

  for (var meta in globals.metadata.parsed) {
    if (globals.metadata.parsed.hasOwnProperty(meta)) {
      switch (meta.toLowerCase()) {
        case 'doctype':
          break;

        case 'title':
          title = '<title>' +  globals.metadata.parsed.title + '</title>\n';
          break;

        case 'charset':
          if (doctype === 'html' || doctype === 'html5') {
            charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
          } else {
            charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
          }
          break;

        case 'language':
        case 'lang':
          lang = ' lang="' + globals.metadata.parsed[meta] + '"';
          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
          break;

        default:
          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
      }
    }
  }

  text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';

  text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text, options, globals) {
  text = globals.converter._dispatch('detab.before', text, options, globals);

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '¨A¨B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/¨A/g, '    ');  // g_tab_width
  text = text.replace(/¨B/g, '');

  text = globals.converter._dispatch('detab.after', text, options, globals);
  return text;
});

showdown.subParser('ellipsis', function (text, options, globals) {

  text = globals.converter._dispatch('ellipsis.before', text, options, globals);

  text = text.replace(/\.\.\./g, '…');

  text = globals.converter._dispatch('ellipsis.after', text, options, globals);

  return text;
});

/**
 * Turn emoji codes into emojis
 *
 * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
 */
showdown.subParser('emoji', function (text, options, globals) {

  if (!options.emoji) {
    return text;
  }

  text = globals.converter._dispatch('emoji.before', text, options, globals);

  var emojiRgx = /:([\S]+?):/g;

  text = text.replace(emojiRgx, function (wm, emojiCode) {
    if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
      return showdown.helper.emojis[emojiCode];
    }
    return wm;
  });

  text = globals.converter._dispatch('emoji.after', text, options, globals);

  return text;
});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

  // Encode <
  text = text.replace(/</g, '&lt;');

  // Encode >
  text = text.replace(/>/g, '&gt;');

  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
  return text;
});

/**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */
showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text, options, globals) {

  text = globals.converter._dispatch('encodeCode.before', text, options, globals);

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text
    .replace(/&/g, '&amp;')
  // Do the angle bracket song and dance:
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // Now, escape characters that are magic in Markdown:
    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
  return text;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

  // Build a regex to find HTML tags.
  var tags     = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
      comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;

  text = text.replace(tags, function (wholeMatch) {
    return wholeMatch
      .replace(/(.)<\/?code>(?=.)/g, '$1`')
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = text.replace(comments, function (wholeMatch) {
    return wholeMatch
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
  return text;
});

/**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */
showdown.subParser('githubCodeBlocks', function (text, options, globals) {

  // early exit if option is not enabled
  if (!options.ghCodeBlocks) {
    return text;
  }

  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

  text += '¨0';

  text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    // First parse the github code block
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

    // Since GHCodeblocks can be false positives, we need to
    // store the primitive text and the parsed text in a global var,
    // and then return a token
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
});

showdown.subParser('hashBlock', function (text, options, globals) {
  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
  text = text.replace(/(^\n+|\n+$)/g, '');
  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <code> elements that should not be parsed as markdown
 */
showdown.subParser('hashCodeTags', function (text, options, globals) {
  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
  };

  // Hash naked <code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('hashElement', function (text, options, globals) {

  return function (wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, '\n');
    blockText = blockText.replace(/^\n/, '');

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, '');

    // Replace the element text with a marker ("¨KxK" where x is its key)
    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

  var blockTags = [
        'pre',
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'table',
        'dl',
        'ol',
        'ul',
        'script',
        'noscript',
        'form',
        'fieldset',
        'iframe',
        'math',
        'style',
        'section',
        'header',
        'footer',
        'nav',
        'article',
        'aside',
        'address',
        'audio',
        'canvas',
        'figure',
        'hgroup',
        'output',
        'video',
        'p'
      ],
      repFunc = function (wholeMatch, match, left, right) {
        var txt = wholeMatch;
        // check if this html element is marked as markdown
        // if so, it's contents should be parsed as markdown
        if (left.search(/\bmarkdown\b/) !== -1) {
          txt = left + globals.converter.makeHtml(match) + right;
        }
        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
      };

  if (options.backslashEscapesHTMLTags) {
    // encode backslash escaped HTML tags
    text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
      return '&lt;' + inside + '&gt;';
    });
  }

  // hash HTML Blocks
  for (var i = 0; i < blockTags.length; ++i) {

    var opTagPos,
        rgx1     = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
        patRight = '</' + blockTags[i] + '>';
    // 1. Look for the first position of the first opening HTML tag in the text
    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {

      // if the HTML tag is \ escaped, we need to escape it and break


      //2. Split the text in that position
      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
          //3. Match recursively
          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

      // prevent an infinite loop
      if (newSubText1 === subTexts[1]) {
        break;
      }
      text = subTexts[0].concat(newSubText1);
    }
  }
  // HR SPECIAL CASE
  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments
  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
  }, '^ {0,3}<!--', '-->', 'gm');

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashHTMLSpans', function (text, options, globals) {
  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

  function hashHTMLSpan (html) {
    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
  }

  // Hash Self Closing tags
  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags without properties
  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags with properties
  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash self closing tags without />
  text = text.replace(/<[^>]+?>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Unhash HTML spans
 */
showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
    var repText = globals.gHtmlSpans[i],
        // limiter to prevent infinite loop (assume 10 as limit for recurse)
        limit = 0;

    while (/¨C(\d+)C/.test(repText)) {
      var num = RegExp.$1;
      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
      if (limit === 10) {
        console.error('maximum nesting of 10 spans reached!!!');
        break;
      }
      ++limit;
    }
    text = text.replace('¨C' + i + 'C', repText);
  }

  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */
showdown.subParser('hashPreCodeTags', function (text, options, globals) {
  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    // encode html entities
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  };

  // Hash <pre><code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('headers', function (text, options, globals) {

  text = globals.converter._dispatch('headers.before', text, options, globals);

  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),

      // Set text-style headers:
      //	Header 1
      //	========
      //
      //	Header 2
      //	--------
      //
      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  text = text.replace(setextRegexH2, function (matchFound, m1) {
    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart + 1,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  // atx-style headers:
  //  # Header 1
  //  ## Header 2
  //  ## Header 2 with closing hashes ##
  //  ...
  //  ###### Header 6
  //
  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
    var hText = m2;
    if (options.customizedHeaderId) {
      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
    }

    var span = showdown.subParser('spanGamut')(hText, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId (m) {
    var title,
        prefix;

    // It is separate from other options to allow combining prefix and customized
    if (options.customizedHeaderId) {
      var match = m.match(/\{([^{]+?)}\s*$/);
      if (match && match[1]) {
        m = match[1];
      }
    }

    title = m;

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (showdown.helper.isString(options.prefixHeaderId)) {
      prefix = options.prefixHeaderId;
    } else if (options.prefixHeaderId === true) {
      prefix = 'section-';
    } else {
      prefix = '';
    }

    if (!options.rawPrefixHeaderId) {
      title = prefix + title;
    }

    if (options.ghCompatibleHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '')
        .replace(/¨T/g, '')
        .replace(/¨D/g, '')
        // replace rest of the chars (&~$ are repeated as they might have been escaped)
        // borrowed from github's redcarpet (some they should produce similar results)
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
        .toLowerCase();
    } else if (options.rawHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '&')
        .replace(/¨T/g, '¨')
        .replace(/¨D/g, '$')
        // replace " and '
        .replace(/["']/g, '-')
        .toLowerCase();
    } else {
      title = title
        .replace(/[^\w]/g, '')
        .toLowerCase();
    }

    if (options.rawPrefixHeaderId) {
      title = prefix + title;
    }

    if (globals.hashLinkCounts[title]) {
      title = title + '-' + (globals.hashLinkCounts[title]++);
    } else {
      globals.hashLinkCounts[title] = 1;
    }
    return title;
  }

  text = globals.converter._dispatch('headers.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('horizontalRule', function (text, options, globals) {
  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {

  text = globals.converter._dispatch('images.before', text, options, globals);

  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
      base64RegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

  function writeImageTagBase64 (wholeMatch, altText, linkId, url, width, height, m5, title) {
    url = url.replace(/\s/g, '');
    return writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title);
  }

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }
    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';

    } else if (url === '' || url === null) {
      if (linkId === '' || linkId === null) {
        // lower-case and turn embedded newlines into spaces
        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(gUrls[linkId])) {
        url = gUrls[linkId];
        if (!showdown.helper.isUndefined(gTitles[linkId])) {
          title = gTitles[linkId];
        }
        if (!showdown.helper.isUndefined(gDims[linkId])) {
          width = gDims[linkId].width;
          height = gDims[linkId].height;
        }
      } else {
        return wholeMatch;
      }
    }

    altText = altText
      .replace(/"/g, '&quot;')
    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
      .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
    //url = showdown.helper.escapeCharacters(url, '*_', false);
    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title && showdown.helper.isString(title)) {
      title = title
        .replace(/"/g, '&quot;')
      //title = showdown.helper.escapeCharacters(title, '*_', false);
        .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (width && height) {
      width  = (width === '*') ? 'auto' : width;
      height = (height === '*') ? 'auto' : height;

      result += ' width="' + width + '"';
      result += ' height="' + height + '"';
    }

    result += ' />';

    return result;
  }

  // First, handle reference-style labeled images: ![alt text][id]
  text = text.replace(referenceRegExp, writeImageTag);

  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")

  // base64 encoded images
  text = text.replace(base64RegExp, writeImageTagBase64);

  // cases with crazy urls like ./image/cat1).png
  text = text.replace(crazyRegExp, writeImageTag);

  // normal cases
  text = text.replace(inlineRegExp, writeImageTag);

  // handle reference-style shortcuts: ![img text]
  text = text.replace(refShortcutRegExp, writeImageTag);

  text = globals.converter._dispatch('images.after', text, options, globals);
  return text;
});

showdown.subParser('italicsAndBold', function (text, options, globals) {

  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

  // it's faster to have 3 separate regexes for each case than have just one
  // because of backtracing, in some cases, it could lead to an exponential effect
  // called "catastrophic backtrace". Ominous!

  function parseInside (txt, left, right) {
    /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */
    return left + txt + right;
  }

  // Parse underscores
  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
      return parseInside (txt, '<strong><em>', '</em></strong>');
    });
    text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
      return parseInside (txt, '<strong>', '</strong>');
    });
    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
      return parseInside (txt, '<em>', '</em>');
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }

  // Now parse asterisks
  if (options.literalMidWordAsterisks) {
    text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<strong><em>', '</em></strong>');
    });
    text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<strong>', '</strong>');
    });
    text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
      return parseInside (txt, lead + '<em>', '</em>');
    });
  } else {
    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }


  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
  return text;
});

/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('lists', function (text, options, globals) {

  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function processListItems (listStr, trimTrailing) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".
    globals.gListLevel++;

    // trim trailing blank lines:
    listStr = listStr.replace(/\n{2,}$/, '\n');

    // attacklab: add sentinel to emulate \z
    listStr += '¨0';

    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));

    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
    // which is a syntax breaking change
    // activating this option reverts to old behavior
    if (options.disableForced4SpacesIndentedSublists) {
      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
    }

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');

      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }

      // ISSUE #312
      // This input: - - - a
      // causes trouble to the parser, since it interprets it as:
      // <ul><li><li><li>a</li></li></li></ul>
      // instead of:
      // <ul><li>- - a</li></ul>
      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
        return '¨A' + wm2;
      });

      // m1 - Leading line or
      // Has a double return (multi paragraph) or
      // Has sublist
      if (m1 || (item.search(/\n{2,}/) > -1)) {
        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
        item = showdown.subParser('blockGamut')(item, options, globals);
      } else {
        // Recursion for sub-lists:
        item = showdown.subParser('lists')(item, options, globals);
        item = item.replace(/\n$/, ''); // chomp(item)
        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);

        // Colapse double linebreaks
        item = item.replace(/\n\n+/g, '\n\n');
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
      }

      // now we need to remove the marker (¨A)
      item = item.replace('¨A', '');
      // we can finally wrap the line in list item tags
      item =  '<li' + bulletStyle + '>' + item + '</li>\n';

      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/¨0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  function styleStartNumber (list, listType) {
    // check if ol and starts by a number different than 1
    if (listType === 'ol') {
      var res = list.match(/^ *(\d+)\./);
      if (res && res[1] !== '1') {
        return ' start="' + res[1] + '"';
      }
    }
    return '';
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function parseConsecutiveLists (list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
        result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL (txt) {
        var pos = txt.search(counterRxg),
            style = styleStartNumber(list, listType);
        if (pos !== -1) {
          // slice
          result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? olRgx : ulRgx;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
        }
      })(list);
    } else {
      var style = styleStartNumber(list, listType);
      result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
    }

    return result;
  }

  /** Start of list parsing **/
  text = globals.converter._dispatch('lists.before', text, options, globals);
  // add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '¨0';

  if (globals.gListLevel) {
    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, list, m2) {
        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      }
    );
  } else {
    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, m1, list, m3) {
        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      }
    );
  }

  // strip sentinel
  text = text.replace(/¨0/, '');
  text = globals.converter._dispatch('lists.after', text, options, globals);
  return text;
});

/**
 * Parse metadata at the top of the document
 */
showdown.subParser('metadata', function (text, options, globals) {

  if (!options.metadata) {
    return text;
  }

  text = globals.converter._dispatch('metadata.before', text, options, globals);

  function parseMetadataContents (content) {
    // raw is raw so it's not changed in any way
    globals.metadata.raw = content;

    // escape chars forbidden in html attributes
    // double quotes
    content = content
      // ampersand first
      .replace(/&/g, '&amp;')
      // double quotes
      .replace(/"/g, '&quot;');

    content = content.replace(/\n {4}/g, ' ');
    content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
      globals.metadata.parsed[key] = value;
      return '';
    });
  }

  text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
    parseMetadataContents(content);
    return '¨M';
  });

  text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
    if (format) {
      globals.metadata.format = format;
    }
    parseMetadataContents(content);
    return '¨M';
  });

  text = text.replace(/¨M/g, '');

  text = globals.converter._dispatch('metadata.after', text, options, globals);
  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text, options, globals) {
  text = globals.converter._dispatch('outdent.before', text, options, globals);

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/¨0/g, '');

  text = globals.converter._dispatch('outdent.after', text, options, globals);
  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {

  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];
    // if this is an HTML marker, copy it
    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
      grafsOut.push(str);

    // test for presence of characters to prevent empty lines being parsed
    // as paragraphs (resulting in undesired extra empty paragraphs)
    } else if (str.search(/\S/) >= 0) {
      str = showdown.subParser('spanGamut')(str, options, globals);
      str = str.replace(/^([ \t]*)/g, '<p>');
      str += '</p>';
      grafsOut.push(str);
    }
  }

  /** Unhashify HTML blocks */
  end = grafsOut.length;
  for (i = 0; i < end; i++) {
    var blockText = '',
        grafsOutIt = grafsOut[i],
        codeFlag = false;
    // if this is a marker for an html block...
    // use RegExp.test instead of string.search because of QML bug
    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
      var delim = RegExp.$1,
          num   = RegExp.$2;

      if (delim === 'K') {
        blockText = globals.gHtmlBlocks[num];
      } else {
        // we need to check if ghBlock is a false positive
        if (codeFlag) {
          // use encoded version of all text
          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
        } else {
          blockText = globals.ghCodeBlocks[num].codeblock;
        }
      }
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
      // Check if grafsOutIt is a pre->code
      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
        codeFlag = true;
      }
    }
    grafsOut[i] = grafsOutIt;
  }
  text = grafsOut.join('\n');
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');
  return globals.converter._dispatch('paragraphs.after', text, options, globals);
});

/**
 * Run extension
 */
showdown.subParser('runExtension', function (ext, text, options, globals) {

  if (ext.filter) {
    text = ext.filter(text, globals.converter, options);

  } else if (ext.regex) {
    // TODO remove this when old extension loading mechanism is deprecated
    var re = ext.regex;
    if (!(re instanceof RegExp)) {
      re = new RegExp(re, 'g');
    }
    text = text.replace(re, ext.replace);
  }

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('spanGamut', function (text, options, globals) {

  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after anchors, because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
  text = showdown.subParser('emoji')(text, options, globals);
  text = showdown.subParser('underline')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);
  text = showdown.subParser('ellipsis')(text, options, globals);

  // we need to hash HTML tags inside spans
  text = showdown.subParser('hashHTMLSpans')(text, options, globals);

  // now we encode amps and angles
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

  // Do hard breaks
  if (options.simpleLineBreaks) {
    // GFM style hard breaks
    // only add line breaks if the text does not contain a block (special case for lists)
    if (!/\n\n¨K/.test(text)) {
      text = text.replace(/\n+/g, '<br />\n');
    }
  } else {
    // Vanilla hard breaks
    text = text.replace(/  +\n/g, '<br />\n');
  }

  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
  return text;
});

showdown.subParser('strikethrough', function (text, options, globals) {

  function parseInside (txt) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return '<del>' + txt + '</del>';
  }

  if (options.strikethrough) {
    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
  }

  return text;
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {

  var regex       = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
      base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var replaceFunc = function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    if (url.match(/^data:.+?\/.+?;base64,/)) {
      // remove newlines
      globals.gUrls[linkId] = url.replace(/\s/g, '');
    } else {
      globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
    }

    if (blankLines) {
      // Oops, found blank lines, so it's not a title.
      // Put back the parenthetical statement we stole.
      return blankLines + title;

    } else {
      if (title) {
        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
      }
      if (options.parseImgDimensions && width && height) {
        globals.gDimensions[linkId] = {
          width:  width,
          height: height
        };
      }
    }
    // Completely remove the definition from the text
    return '';
  };

  // first we try to find base64 link references
  text = text.replace(base64Regex, replaceFunc);

  text = text.replace(regex, replaceFunc);

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {

  if (!options.tables) {
    return text;
  }

  var tableRgx       = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
      //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
      singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

  function parseStyles (sLine) {
    if (/^:[ \t]*--*$/.test(sLine)) {
      return ' style="text-align:left;"';
    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
      return ' style="text-align:right;"';
    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
      return ' style="text-align:center;"';
    } else {
      return '';
    }
  }

  function parseHeaders (header, style) {
    var id = '';
    header = header.trim();
    // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
    if (options.tablesHeaderId || options.tableHeaderId) {
      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
    }
    header = showdown.subParser('spanGamut')(header, options, globals);

    return '<th' + id + style + '>' + header + '</th>\n';
  }

  function parseCells (cell, style) {
    var subText = showdown.subParser('spanGamut')(cell, options, globals);
    return '<td' + style + '>' + subText + '</td>\n';
  }

  function buildTable (headers, cells) {
    var tb = '<table>\n<thead>\n<tr>\n',
        tblLgn = headers.length;

    for (var i = 0; i < tblLgn; ++i) {
      tb += headers[i];
    }
    tb += '</tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < cells.length; ++i) {
      tb += '<tr>\n';
      for (var ii = 0; ii < tblLgn; ++ii) {
        tb += cells[i][ii];
      }
      tb += '</tr>\n';
    }
    tb += '</tbody>\n</table>\n';
    return tb;
  }

  function parseTable (rawTable) {
    var i, tableLines = rawTable.split('\n');

    for (i = 0; i < tableLines.length; ++i) {
      // strip wrong first and last column if wrapped tables are used
      if (/^ {0,3}\|/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
      }
      if (/\|[ \t]*$/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
      }
      // parse code spans first, but we only support one line code spans
      tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
    }

    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
        rawCells = [],
        headers = [],
        styles = [],
        cells = [];

    tableLines.shift();
    tableLines.shift();

    for (i = 0; i < tableLines.length; ++i) {
      if (tableLines[i].trim() === '') {
        continue;
      }
      rawCells.push(
        tableLines[i]
          .split('|')
          .map(function (s) {
            return s.trim();
          })
      );
    }

    if (rawHeaders.length < rawStyles.length) {
      return rawTable;
    }

    for (i = 0; i < rawStyles.length; ++i) {
      styles.push(parseStyles(rawStyles[i]));
    }

    for (i = 0; i < rawHeaders.length; ++i) {
      if (showdown.helper.isUndefined(styles[i])) {
        styles[i] = '';
      }
      headers.push(parseHeaders(rawHeaders[i], styles[i]));
    }

    for (i = 0; i < rawCells.length; ++i) {
      var row = [];
      for (var ii = 0; ii < headers.length; ++ii) {
        if (showdown.helper.isUndefined(rawCells[i][ii])) ;
        row.push(parseCells(rawCells[i][ii], styles[ii]));
      }
      cells.push(row);
    }

    return buildTable(headers, cells);
  }

  text = globals.converter._dispatch('tables.before', text, options, globals);

  // find escaped pipe characters
  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

  // parse multi column tables
  text = text.replace(tableRgx, parseTable);

  // parse one column tables
  text = text.replace(singeColTblRgx, parseTable);

  text = globals.converter._dispatch('tables.after', text, options, globals);

  return text;
});

showdown.subParser('underline', function (text, options, globals) {

  if (!options.underline) {
    return text;
  }

  text = globals.converter._dispatch('underline.before', text, options, globals);

  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
      return '<u>' + txt + '</u>';
    });
    text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
      return '<u>' + txt + '</u>';
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
    });
  }

  // escape remaining underscores to prevent them being parsed by italic and bold
  text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('underline.after', text, options, globals);

  return text;
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });

  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
  return text;
});

showdown.subParser('makeMarkdown.blockquote', function (node, globals) {

  var txt = '';
  if (node.hasChildNodes()) {
    var children = node.childNodes,
        childrenLength = children.length;

    for (var i = 0; i < childrenLength; ++i) {
      var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);

      if (innerTxt === '') {
        continue;
      }
      txt += innerTxt;
    }
  }
  // cleanup
  txt = txt.trim();
  txt = '> ' + txt.split('\n').join('\n> ');
  return txt;
});

showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {

  var lang = node.getAttribute('language'),
      num  = node.getAttribute('precodenum');
  return '```' + lang + '\n' + globals.preList[num] + '\n```';
});

showdown.subParser('makeMarkdown.codeSpan', function (node) {

  return '`' + node.innerHTML + '`';
});

showdown.subParser('makeMarkdown.emphasis', function (node, globals) {

  var txt = '';
  if (node.hasChildNodes()) {
    txt += '*';
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '*';
  }
  return txt;
});

showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {

  var headerMark = new Array(headerLevel + 1).join('#'),
      txt = '';

  if (node.hasChildNodes()) {
    txt = headerMark + ' ';
    var children = node.childNodes,
        childrenLength = children.length;

    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
  }
  return txt;
});

showdown.subParser('makeMarkdown.hr', function () {

  return '---';
});

showdown.subParser('makeMarkdown.image', function (node) {

  var txt = '';
  if (node.hasAttribute('src')) {
    txt += '![' + node.getAttribute('alt') + '](';
    txt += '<' + node.getAttribute('src') + '>';
    if (node.hasAttribute('width') && node.hasAttribute('height')) {
      txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
    }

    if (node.hasAttribute('title')) {
      txt += ' "' + node.getAttribute('title') + '"';
    }
    txt += ')';
  }
  return txt;
});

showdown.subParser('makeMarkdown.links', function (node, globals) {

  var txt = '';
  if (node.hasChildNodes() && node.hasAttribute('href')) {
    var children = node.childNodes,
        childrenLength = children.length;
    txt = '[';
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '](';
    txt += '<' + node.getAttribute('href') + '>';
    if (node.hasAttribute('title')) {
      txt += ' "' + node.getAttribute('title') + '"';
    }
    txt += ')';
  }
  return txt;
});

showdown.subParser('makeMarkdown.list', function (node, globals, type) {

  var txt = '';
  if (!node.hasChildNodes()) {
    return '';
  }
  var listItems       = node.childNodes,
      listItemsLenght = listItems.length,
      listNum = node.getAttribute('start') || 1;

  for (var i = 0; i < listItemsLenght; ++i) {
    if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
      continue;
    }

    // define the bullet to use in list
    var bullet = '';
    if (type === 'ol') {
      bullet = listNum.toString() + '. ';
    } else {
      bullet = '- ';
    }

    // parse list item
    txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
    ++listNum;
  }

  // add comment at the end to prevent consecutive lists to be parsed as one
  txt += '\n<!-- -->\n';
  return txt.trim();
});

showdown.subParser('makeMarkdown.listItem', function (node, globals) {

  var listItemTxt = '';

  var children = node.childNodes,
      childrenLenght = children.length;

  for (var i = 0; i < childrenLenght; ++i) {
    listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
  }
  // if it's only one liner, we need to add a newline at the end
  if (!/\n$/.test(listItemTxt)) {
    listItemTxt += '\n';
  } else {
    // it's multiparagraph, so we need to indent
    listItemTxt = listItemTxt
      .split('\n')
      .join('\n    ')
      .replace(/^ {4}$/gm, '')
      .replace(/\n\n+/g, '\n\n');
  }

  return listItemTxt;
});



showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {

  spansOnly = spansOnly || false;

  var txt = '';

  // edge case of text without wrapper paragraph
  if (node.nodeType === 3) {
    return showdown.subParser('makeMarkdown.txt')(node, globals);
  }

  // HTML comment
  if (node.nodeType === 8) {
    return '<!--' + node.data + '-->\n\n';
  }

  // process only node elements
  if (node.nodeType !== 1) {
    return '';
  }

  var tagName = node.tagName.toLowerCase();

  switch (tagName) {

    //
    // BLOCKS
    //
    case 'h1':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n'; }
      break;
    case 'h2':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n'; }
      break;
    case 'h3':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n'; }
      break;
    case 'h4':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n'; }
      break;
    case 'h5':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n'; }
      break;
    case 'h6':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n'; }
      break;

    case 'p':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n'; }
      break;

    case 'blockquote':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n'; }
      break;

    case 'hr':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n'; }
      break;

    case 'ol':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n'; }
      break;

    case 'ul':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n'; }
      break;

    case 'precode':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n'; }
      break;

    case 'pre':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n'; }
      break;

    case 'table':
      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n'; }
      break;

    //
    // SPANS
    //
    case 'code':
      txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
      break;

    case 'em':
    case 'i':
      txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
      break;

    case 'strong':
    case 'b':
      txt = showdown.subParser('makeMarkdown.strong')(node, globals);
      break;

    case 'del':
      txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
      break;

    case 'a':
      txt = showdown.subParser('makeMarkdown.links')(node, globals);
      break;

    case 'img':
      txt = showdown.subParser('makeMarkdown.image')(node, globals);
      break;

    default:
      txt = node.outerHTML + '\n\n';
  }

  // common normalization
  // TODO eventually

  return txt;
});

showdown.subParser('makeMarkdown.paragraph', function (node, globals) {

  var txt = '';
  if (node.hasChildNodes()) {
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
  }

  // some text normalization
  txt = txt.trim();

  return txt;
});

showdown.subParser('makeMarkdown.pre', function (node, globals) {

  var num  = node.getAttribute('prenum');
  return '<pre>' + globals.preList[num] + '</pre>';
});

showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {

  var txt = '';
  if (node.hasChildNodes()) {
    txt += '~~';
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '~~';
  }
  return txt;
});

showdown.subParser('makeMarkdown.strong', function (node, globals) {

  var txt = '';
  if (node.hasChildNodes()) {
    txt += '**';
    var children = node.childNodes,
        childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '**';
  }
  return txt;
});

showdown.subParser('makeMarkdown.table', function (node, globals) {

  var txt = '',
      tableArray = [[], []],
      headings   = node.querySelectorAll('thead>tr>th'),
      rows       = node.querySelectorAll('tbody>tr'),
      i, ii;
  for (i = 0; i < headings.length; ++i) {
    var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
        allign = '---';

    if (headings[i].hasAttribute('style')) {
      var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');
      switch (style) {
        case 'text-align:left;':
          allign = ':---';
          break;
        case 'text-align:right;':
          allign = '---:';
          break;
        case 'text-align:center;':
          allign = ':---:';
          break;
      }
    }
    tableArray[0][i] = headContent.trim();
    tableArray[1][i] = allign;
  }

  for (i = 0; i < rows.length; ++i) {
    var r = tableArray.push([]) - 1,
        cols = rows[i].getElementsByTagName('td');

    for (ii = 0; ii < headings.length; ++ii) {
      var cellContent = ' ';
      if (typeof cols[ii] !== 'undefined') {
        cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
      }
      tableArray[r].push(cellContent);
    }
  }

  var cellSpacesCount = 3;
  for (i = 0; i < tableArray.length; ++i) {
    for (ii = 0; ii < tableArray[i].length; ++ii) {
      var strLen = tableArray[i][ii].length;
      if (strLen > cellSpacesCount) {
        cellSpacesCount = strLen;
      }
    }
  }

  for (i = 0; i < tableArray.length; ++i) {
    for (ii = 0; ii < tableArray[i].length; ++ii) {
      if (i === 1) {
        if (tableArray[i][ii].slice(-1) === ':') {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
        } else {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
        }
      } else {
        tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
      }
    }
    txt += '| ' + tableArray[i].join(' | ') + ' |\n';
  }

  return txt.trim();
});

showdown.subParser('makeMarkdown.tableCell', function (node, globals) {

  var txt = '';
  if (!node.hasChildNodes()) {
    return '';
  }
  var children = node.childNodes,
      childrenLength = children.length;

  for (var i = 0; i < childrenLength; ++i) {
    txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
  }
  return txt.trim();
});

showdown.subParser('makeMarkdown.txt', function (node) {

  var txt = node.nodeValue;

  // multiple spaces are collapsed
  txt = txt.replace(/ +/g, ' ');

  // replace the custom ¨NBSP; with a space
  txt = txt.replace(/¨NBSP;/g, ' ');

  // ", <, > and & should replace escaped html entities
  txt = showdown.helper.unescapeHTMLEntities(txt);

  // escape markdown magic characters
  // emphasis, strong and strikethrough - can appear everywhere
  // we also escape pipe (|) because of tables
  // and escape ` because of code blocks and spans
  txt = txt.replace(/([*_~|`])/g, '\\$1');

  // escape > because of blockquotes
  txt = txt.replace(/^(\s*)>/g, '\\$1>');

  // hash character, only troublesome at the beginning of a line because of headers
  txt = txt.replace(/^#/gm, '\\#');

  // horizontal rules
  txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3');

  // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
  txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.');

  // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
  txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2');

  // images and links, ] followed by ( is problematic, so we escape it
  txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\(');

  // reference URIs must also be escaped
  txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');

  return txt;
});

var root = this;

// AMD Loader
if (module.exports) {
  module.exports = showdown;

// Regular Browser loader
} else {
  root.showdown = showdown;
}
}).call(commonjsGlobal);


});

var Card = /** @class */ (function () {
    function Card(id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) {
        this.id = id;
        this.deckName = deckName;
        this.initialContent = initialContent;
        this.fields = fields;
        this.reversed = reversed;
        this.initialOffset = initialOffset;
        this.endOffset = endOffset;
        this.tags = tags;
        this.inserted = inserted;
        this.mediaNames = mediaNames;
        this.mediaBase64Encoded = [];
        this.oldTags = [];
        this.modelName = "";
    }
    Card.prototype.match = function (card) {
        // TODO not supported currently
        // if (this.modelName !== card.modelName) {
        //     return false
        // }
        var e_1, _a;
        var fields = Object.entries(card.fields);
        // This is the case of a switch from a model to another one. It cannot be handeled
        if (fields.length !== Object.entries(this.fields).length) {
            return true;
        }
        try {
            for (var fields_1 = __values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                var fieldName = field[0];
                if (field[1].value !== this.fields[fieldName]) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return arraysEqual(card.tags, this.tags);
    };
    Card.prototype.getCodeDeckNameExtension = function () {
        return "";
    };
    return Card;
}());

var Flashcard = /** @class */ (function (_super) {
    __extends(Flashcard, _super);
    function Flashcard(id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) {
        if (id === void 0) { id = -1; }
        if (tags === void 0) { tags = []; }
        if (inserted === void 0) { inserted = false; }
        var _this = _super.call(this, id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) || this;
        _this.toString = function () {
            return "Q: ".concat(_this.fields[0], "\nA: ").concat(_this.fields[1]);
        };
        _this.modelName = _this.reversed
            ? "Obsidian-basic-reversed"
            : "Obsidian-basic";
        if (fields["Source"]) {
            _this.modelName += sourceDeckExtension;
        }
        return _this;
    }
    Flashcard.prototype.getCard = function (update) {
        if (update === void 0) { update = false; }
        var card = {
            deckName: this.deckName,
            modelName: this.modelName,
            fields: this.fields,
            tags: this.tags,
        };
        if (update) {
            card["id"] = this.id;
        }
        return card;
    };
    Flashcard.prototype.getMedias = function () {
        var _this = this;
        var medias = [];
        this.mediaBase64Encoded.forEach(function (data, index) {
            medias.push({
                filename: _this.mediaNames[index],
                data: data,
            });
        });
        return medias;
    };
    Flashcard.prototype.getIdFormat = function () {
        return "^" + this.id.toString() + "\n";
    };
    return Flashcard;
}(Card));

var Inlinecard = /** @class */ (function (_super) {
    __extends(Inlinecard, _super);
    function Inlinecard(id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) {
        if (id === void 0) { id = -1; }
        if (tags === void 0) { tags = []; }
        if (inserted === void 0) { inserted = false; }
        var _this = _super.call(this, id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) || this;
        _this.toString = function () {
            return "Q: ".concat(_this.fields[0], " \nA: ").concat(_this.fields[1], " ");
        };
        _this.modelName = _this.reversed
            ? "Obsidian-basic-reversed"
            : "Obsidian-basic";
        if (fields["Source"]) {
            _this.modelName += sourceDeckExtension;
        }
        return _this;
    }
    Inlinecard.prototype.getCard = function (update) {
        if (update === void 0) { update = false; }
        var card = {
            deckName: this.deckName,
            modelName: this.modelName,
            fields: this.fields,
            tags: this.tags,
        };
        if (update) {
            card["id"] = this.id;
        }
        return card;
    };
    Inlinecard.prototype.getMedias = function () {
        var _this = this;
        var medias = [];
        this.mediaBase64Encoded.forEach(function (data, index) {
            medias.push({
                filename: _this.mediaNames[index],
                data: data,
            });
        });
        return medias;
    };
    Inlinecard.prototype.getIdFormat = function () {
        return "^" + this.id.toString();
    };
    return Inlinecard;
}(Card));

var Spacedcard = /** @class */ (function (_super) {
    __extends(Spacedcard, _super);
    function Spacedcard(id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) {
        if (id === void 0) { id = -1; }
        if (tags === void 0) { tags = []; }
        if (inserted === void 0) { inserted = false; }
        var _this = _super.call(this, id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) || this;
        _this.toString = function () {
            return "Prompt: ".concat(_this.fields[0]);
        };
        _this.modelName = "Obsidian-spaced";
        if (fields["Source"]) {
            _this.modelName += sourceDeckExtension;
        }
        return _this;
    }
    Spacedcard.prototype.getCard = function (update) {
        if (update === void 0) { update = false; }
        var card = {
            deckName: this.deckName,
            modelName: this.modelName,
            fields: this.fields,
            tags: this.tags,
        };
        if (update) {
            card["id"] = this.id;
        }
        return card;
    };
    Spacedcard.prototype.getMedias = function () {
        var _this = this;
        var medias = [];
        this.mediaBase64Encoded.forEach(function (data, index) {
            medias.push({
                filename: _this.mediaNames[index],
                data: data,
            });
        });
        return medias;
    };
    Spacedcard.prototype.getIdFormat = function () {
        return "^" + this.id.toString() + "\n";
    };
    return Spacedcard;
}(Card));

var Clozecard = /** @class */ (function (_super) {
    __extends(Clozecard, _super);
    function Clozecard(id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) {
        if (id === void 0) { id = -1; }
        if (tags === void 0) { tags = []; }
        if (inserted === void 0) { inserted = false; }
        var _this = _super.call(this, id, deckName, initialContent, fields, reversed, initialOffset, endOffset, tags, inserted, mediaNames) || this;
        _this.toString = function () {
            return "Cloze: ".concat(_this.fields[0]);
        };
        _this.modelName = "Obsidian-cloze";
        if (fields["Source"]) {
            _this.modelName += sourceDeckExtension;
        }
        return _this;
    }
    Clozecard.prototype.getCard = function (update) {
        if (update === void 0) { update = false; }
        var card = {
            deckName: this.deckName,
            modelName: this.modelName,
            fields: this.fields,
            tags: this.tags,
        };
        if (update) {
            card["id"] = this.id;
        }
        return card;
    };
    Clozecard.prototype.getMedias = function () {
        var _this = this;
        var medias = [];
        this.mediaBase64Encoded.forEach(function (data, index) {
            medias.push({
                filename: _this.mediaNames[index],
                data: data,
            });
        });
        return medias;
    };
    Clozecard.prototype.getIdFormat = function () {
        return "\n^" + this.id.toString();
    };
    return Clozecard;
}(Card));

var Parser = /** @class */ (function () {
    function Parser(regex, settings) {
        this.regex = regex;
        this.settings = settings;
        this.htmlConverter = new showdown.Converter();
        this.htmlConverter.setOption("simplifiedAutoLink", true);
        this.htmlConverter.setOption("tables", true);
        this.htmlConverter.setOption("tasks", true);
        this.htmlConverter.setOption("strikethrough", true);
        this.htmlConverter.setOption("ghCodeBlocks", true);
        this.htmlConverter.setOption("requireSpaceBeforeHeadingText", true);
        this.htmlConverter.setOption("simpleLineBreaks", true);
    }
    Parser.prototype.generateFlashcards = function (file, deck, vault, note, globalTags) {
        var e_1, _a;
        if (globalTags === void 0) { globalTags = []; }
        var contextAware = this.settings.contextAwareMode;
        var cards = [];
        var headings = [];
        if (contextAware) {
            // https://regex101.com/r/agSp9X/4
            headings = __spreadArray([], __read(file.matchAll(this.regex.headingsRegex)), false);
        }
        note = this.substituteObsidianLinks("[[".concat(note, "]]"), vault);
        cards = cards.concat(this.generateCardsWithTag(file, headings, deck, vault, note, globalTags));
        cards = cards.concat(this.generateInlineCards(file, headings, deck, vault, note, globalTags));
        cards = cards.concat(this.generateSpacedCards(file, headings, deck, vault, note, globalTags));
        cards = cards.concat(this.generateClozeCards(file, headings, deck, vault, note, globalTags));
        // Filter out cards that are fully inside a code block, a math block or a math inline block
        var codeBlocks = __spreadArray([], __read(file.matchAll(this.regex.obsidianCodeBlock)), false);
        var mathBlocks = __spreadArray([], __read(file.matchAll(this.regex.mathBlock)), false);
        var mathInline = __spreadArray([], __read(file.matchAll(this.regex.mathInline)), false);
        var blocksToFilter = __spreadArray(__spreadArray(__spreadArray([], __read(codeBlocks), false), __read(mathBlocks), false), __read(mathInline), false);
        var rangesToDiscard = blocksToFilter.map(function (x) { return ([x.index, x.index + x[0].length]); });
        cards = cards.filter(function (card) {
            var cardRange = [card.initialOffset, card.endOffset];
            var isInRangeToDiscard = rangesToDiscard.some(function (range) {
                return (cardRange[0] >= range[0] && cardRange[1] <= range[1]);
            });
            return !isInRangeToDiscard;
        });
        cards.sort(function (a, b) { return a.endOffset - b.endOffset; });
        var defaultAnkiTag = this.settings.defaultAnkiTag;
        if (defaultAnkiTag) {
            try {
                for (var cards_1 = __values(cards), cards_1_1 = cards_1.next(); !cards_1_1.done; cards_1_1 = cards_1.next()) {
                    var card = cards_1_1.value;
                    card.tags.push(defaultAnkiTag);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (cards_1_1 && !cards_1_1.done && (_a = cards_1.return)) _a.call(cards_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return cards;
    };
    /**
     * Gives back the ancestor headings of a line.
     * @param headings The list of all the headings available in a file.
     * @param line The line whose ancestors need to be calculated.
     * @param headingLevel The level of the first ancestor heading, i.e. the number of #.
     */
    Parser.prototype.getContext = function (headings, index, headingLevel) {
        var context = [];
        var currentIndex = index;
        var goalLevel = 6;
        var i = headings.length - 1;
        // Get the level of the first heading before the index (i.e. above the current line)
        if (headingLevel !== -1) {
            // This is the case of a #flashcard in a heading
            goalLevel = headingLevel - 1;
        }
        else {
            // Find first heading and its level
            // This is the case of a #flashcard in a paragraph
            for (i; i >= 0; i--) {
                if (headings[i].index < currentIndex) {
                    currentIndex = headings[i].index;
                    goalLevel = headings[i][1].length - 1;
                    context.unshift(headings[i][2].trim());
                    break;
                }
            }
        }
        // Search for the other headings
        for (i; i >= 0; i--) {
            var currentLevel = headings[i][1].length;
            if (currentLevel == goalLevel && headings[i].index < currentIndex) {
                currentIndex = headings[i].index;
                goalLevel = currentLevel - 1;
                context.unshift(headings[i][2].trim());
            }
        }
        return context;
    };
    Parser.prototype.generateSpacedCards = function (file, headings, deck, vault, note, globalTags) {
        var e_2, _a;
        if (globalTags === void 0) { globalTags = []; }
        var contextAware = this.settings.contextAwareMode;
        var cards = [];
        var matches = __spreadArray([], __read(file.matchAll(this.regex.cardsSpacedStyle)), false);
        try {
            for (var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                var match = matches_1_1.value;
                var reversed = false;
                var headingLevel = -1;
                if (match[1]) {
                    headingLevel =
                        match[1].trim().length !== 0 ? match[1].trim().length : -1;
                }
                // Match.index - 1 because otherwise in the context there will be even match[1], i.e. the question itself
                var context = contextAware
                    ? this.getContext(headings, match.index - 1, headingLevel)
                    : "";
                var originalPrompt = match[2].trim();
                var prompt_1 = contextAware
                    ? __spreadArray(__spreadArray([], __read(context), false), [match[2].trim()], false).join("".concat(this.settings.contextSeparator))
                    : match[2].trim();
                var medias = this.getImageLinks(prompt_1);
                medias = medias.concat(this.getAudioLinks(prompt_1));
                prompt_1 = this.parseLine(prompt_1, vault);
                var initialOffset = match.index;
                var endingLine = match.index + match[0].length;
                var tags = this.parseTags(match[4], globalTags);
                var id = match[5] ? Number(match[5]) : -1;
                var inserted = match[5] ? true : false;
                var fields = { Prompt: prompt_1 };
                if (this.settings.sourceSupport) {
                    fields["Source"] = note;
                }
                var card = new Spacedcard(id, deck, originalPrompt, fields, reversed, initialOffset, endingLine, tags, inserted, medias);
                cards.push(card);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return cards;
    };
    Parser.prototype.generateClozeCards = function (file, headings, deck, vault, note, globalTags) {
        var e_3, _a;
        if (globalTags === void 0) { globalTags = []; }
        var contextAware = this.settings.contextAwareMode;
        var cards = [];
        var matches = __spreadArray([], __read(file.matchAll(this.regex.cardsClozeWholeLine)), false);
        var mathBlocks = __spreadArray([], __read(file.matchAll(this.regex.mathBlock)), false);
        var mathInline = __spreadArray([], __read(file.matchAll(this.regex.mathInline)), false);
        var blocksToFilter = __spreadArray(__spreadArray([], __read(mathBlocks), false), __read(mathInline), false);
        var rangesToDiscard = blocksToFilter.map(function (x) { return ([x.index, x.index + x[0].length]); });
        var _loop_1 = function (match) {
            var reversed = false;
            var headingLevel = -1;
            if (match[1]) {
                headingLevel =
                    match[1].trim().length !== 0 ? match[1].trim().length : -1;
            }
            // Match.index - 1 because otherwise in the context there will be even match[1], i.e. the question itself
            var context = contextAware
                ? this_1.getContext(headings, match.index - 1, headingLevel)
                : "";
            // If all the curly clozes are inside a math block, then do not create the card
            match[2].matchAll(this_1.regex.singleClozeCurly);
            var matchIndex = match.index;
            // Identify curly clozes, drop all the ones that are in math blocks i.e. ($\frac{1}{12}$) and substitute the others with Anki syntax
            var clozeText = match[2].replace(this_1.regex.singleClozeCurly, function (match, g1, g2, g3, offset) {
                var globalOffset = matchIndex + offset;
                var isInMathBlock = rangesToDiscard.some(function (x) { return (globalOffset >= x[0] && globalOffset + match[0].length <= x[1]); });
                if (isInMathBlock) {
                    return match;
                }
                else {
                    if (g2) {
                        return "{{c".concat(g2, "::").concat(g3, "}}");
                    }
                    else {
                        return "{{c1::".concat(g3, "}}");
                    }
                }
            });
            // Replace the highlight clozes in the line with Anki syntax
            clozeText = clozeText.replace(this_1.regex.singleClozeHighlight, "{{c1::$2}}");
            if (clozeText === match[2]) {
                return "continue";
            }
            var originalLine = match[2].trim();
            // Add context
            clozeText = contextAware
                ? __spreadArray(__spreadArray([], __read(context), false), [clozeText.trim()], false).join("".concat(this_1.settings.contextSeparator))
                : clozeText.trim();
            var medias = this_1.getImageLinks(clozeText);
            medias = medias.concat(this_1.getAudioLinks(clozeText));
            clozeText = this_1.parseLine(clozeText, vault);
            var initialOffset = match.index;
            var endingLine = match.index + match[0].length;
            var tags = this_1.parseTags(match[4], globalTags);
            var id = match[5] ? Number(match[5]) : -1;
            var inserted = match[5] ? true : false;
            var fields = { Text: clozeText, Extra: "" };
            if (this_1.settings.sourceSupport) {
                fields["Source"] = note;
            }
            var card = new Clozecard(id, deck, originalLine, fields, reversed, initialOffset, endingLine, tags, inserted, medias);
            cards.push(card);
        };
        var this_1 = this;
        try {
            for (var matches_2 = __values(matches), matches_2_1 = matches_2.next(); !matches_2_1.done; matches_2_1 = matches_2.next()) {
                var match = matches_2_1.value;
                _loop_1(match);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (matches_2_1 && !matches_2_1.done && (_a = matches_2.return)) _a.call(matches_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return cards;
    };
    Parser.prototype.generateInlineCards = function (file, headings, deck, vault, note, globalTags) {
        var e_4, _a;
        if (globalTags === void 0) { globalTags = []; }
        var contextAware = this.settings.contextAwareMode;
        var cards = [];
        var matches = __spreadArray([], __read(file.matchAll(this.regex.cardsInlineStyle)), false);
        try {
            for (var matches_3 = __values(matches), matches_3_1 = matches_3.next(); !matches_3_1.done; matches_3_1 = matches_3.next()) {
                var match = matches_3_1.value;
                if (match[2].toLowerCase().startsWith("cards-deck") ||
                    match[2].toLowerCase().startsWith("tags")) {
                    continue;
                }
                var reversed = match[3] === this.settings.inlineSeparatorReverse;
                var headingLevel = -1;
                if (match[1]) {
                    headingLevel =
                        match[1].trim().length !== 0 ? match[1].trim().length : -1;
                }
                // Match.index - 1 because otherwise in the context there will be even match[1], i.e. the question itself
                var context = contextAware
                    ? this.getContext(headings, match.index - 1, headingLevel)
                    : "";
                var originalQuestion = match[2].trim();
                var question = contextAware
                    ? __spreadArray(__spreadArray([], __read(context), false), [match[2].trim()], false).join("".concat(this.settings.contextSeparator))
                    : match[2].trim();
                var answer = match[4].trim();
                var medias = this.getImageLinks(question);
                medias = medias.concat(this.getImageLinks(answer));
                medias = medias.concat(this.getAudioLinks(answer));
                question = this.parseLine(question, vault);
                answer = this.parseLine(answer, vault);
                var initialOffset = match.index;
                var endingLine = match.index + match[0].length;
                var tags = this.parseTags(match[5], globalTags);
                var id = match[6] ? Number(match[6]) : -1;
                var inserted = match[6] ? true : false;
                var fields = { Front: question, Back: answer };
                if (this.settings.sourceSupport) {
                    fields["Source"] = note;
                }
                var card = new Inlinecard(id, deck, originalQuestion, fields, reversed, initialOffset, endingLine, tags, inserted, medias);
                cards.push(card);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (matches_3_1 && !matches_3_1.done && (_a = matches_3.return)) _a.call(matches_3);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return cards;
    };
    Parser.prototype.generateCardsWithTag = function (file, headings, deck, vault, note, globalTags) {
        var e_5, _a;
        if (globalTags === void 0) { globalTags = []; }
        var contextAware = this.settings.contextAwareMode;
        var cards = [];
        var matches = __spreadArray([], __read(file.matchAll(this.regex.flashscardsWithTag)), false);
        var embedMap = this.getEmbedMap();
        try {
            for (var matches_4 = __values(matches), matches_4_1 = matches_4.next(); !matches_4_1.done; matches_4_1 = matches_4.next()) {
                var match = matches_4_1.value;
                var reversed = match[3].trim().toLowerCase() ===
                    "#".concat(this.settings.flashcardsTag, "-reverse") ||
                    match[3].trim().toLowerCase() ===
                        "#".concat(this.settings.flashcardsTag, "/reverse");
                var headingLevel = match[1].trim().length !== 0 ? match[1].length : -1;
                // Match.index - 1 because otherwise in the context there will be even match[1], i.e. the question itself
                var context = contextAware
                    ? this.getContext(headings, match.index - 1, headingLevel).concat([])
                    : "";
                var originalQuestion = match[2].trim();
                var question = contextAware
                    ? __spreadArray(__spreadArray([], __read(context), false), [match[2].trim()], false).join("".concat(this.settings.contextSeparator))
                    : match[2].trim();
                var answer = match[5].trim();
                var medias = this.getImageLinks(question);
                medias = medias.concat(this.getImageLinks(answer));
                medias = medias.concat(this.getAudioLinks(answer));
                answer = this.getEmbedWrapContent(embedMap, answer);
                question = this.parseLine(question, vault);
                answer = this.parseLine(answer, vault);
                var initialOffset = match.index;
                var endingLine = match.index + match[0].length;
                var tags = this.parseTags(match[4], globalTags);
                var id = match[6] ? Number(match[6]) : -1;
                var inserted = match[6] ? true : false;
                var fields = { Front: question, Back: answer };
                if (this.settings.sourceSupport) {
                    fields["Source"] = note;
                }
                var card = new Flashcard(id, deck, originalQuestion, fields, reversed, initialOffset, endingLine, tags, inserted, medias);
                cards.push(card);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (matches_4_1 && !matches_4_1.done && (_a = matches_4.return)) _a.call(matches_4);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return cards;
    };
    Parser.prototype.getCardsToDelete = function (file) {
        // Find block IDs with no content above it
        return __spreadArray([], __read(file.matchAll(this.regex.cardsToDelete)), false).map(function (match) {
            return Number(match[1]);
        });
    };
    Parser.prototype.parseLine = function (str, vaultName) {
        return this.htmlConverter.makeHtml(this.mathToAnki(this.substituteObsidianLinks(this.substituteImageLinks(this.substituteAudioLinks(str)), vaultName)));
    };
    Parser.prototype.getImageLinks = function (str) {
        var e_6, _a, e_7, _b;
        var wikiMatches = str.matchAll(this.regex.wikiImageLinks);
        var markdownMatches = str.matchAll(this.regex.markdownImageLinks);
        var links = [];
        try {
            for (var wikiMatches_1 = __values(wikiMatches), wikiMatches_1_1 = wikiMatches_1.next(); !wikiMatches_1_1.done; wikiMatches_1_1 = wikiMatches_1.next()) {
                var wikiMatch = wikiMatches_1_1.value;
                links.push(wikiMatch[1]);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (wikiMatches_1_1 && !wikiMatches_1_1.done && (_a = wikiMatches_1.return)) _a.call(wikiMatches_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var markdownMatches_1 = __values(markdownMatches), markdownMatches_1_1 = markdownMatches_1.next(); !markdownMatches_1_1.done; markdownMatches_1_1 = markdownMatches_1.next()) {
                var markdownMatch = markdownMatches_1_1.value;
                links.push(decodeURIComponent(markdownMatch[1]));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (markdownMatches_1_1 && !markdownMatches_1_1.done && (_b = markdownMatches_1.return)) _b.call(markdownMatches_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return links;
    };
    Parser.prototype.getAudioLinks = function (str) {
        var e_8, _a;
        var wikiMatches = str.matchAll(this.regex.wikiAudioLinks);
        var links = [];
        try {
            for (var wikiMatches_2 = __values(wikiMatches), wikiMatches_2_1 = wikiMatches_2.next(); !wikiMatches_2_1.done; wikiMatches_2_1 = wikiMatches_2.next()) {
                var wikiMatch = wikiMatches_2_1.value;
                links.push(wikiMatch[1]);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (wikiMatches_2_1 && !wikiMatches_2_1.done && (_a = wikiMatches_2.return)) _a.call(wikiMatches_2);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return links;
    };
    Parser.prototype.substituteObsidianLinks = function (str, vaultName) {
        var linkRegex = /\[\[(.+?)(?:\|(.+?))?\]\]/gim;
        vaultName = encodeURIComponent(vaultName);
        return str.replace(linkRegex, function (match, filename, rename) {
            var href = "obsidian://open?vault=".concat(vaultName, "&file=").concat(encodeURIComponent(filename), ".md");
            var fileRename = rename ? rename : filename;
            return "<a href=\"".concat(href, "\">").concat(fileRename, "</a>");
        });
    };
    Parser.prototype.substituteImageLinks = function (str) {
        str = str.replace(this.regex.wikiImageLinks, "<img src='$1'>");
        str = str.replace(this.regex.markdownImageLinks, "<img src='$1'>");
        return str;
    };
    Parser.prototype.substituteAudioLinks = function (str) {
        return str.replace(this.regex.wikiAudioLinks, "[sound:$1]");
    };
    Parser.prototype.mathToAnki = function (str) {
        str = str.replace(this.regex.mathBlock, function (match, p1, p2) {
            return "\\\\[" + escapeMarkdown(p2) + " \\\\]";
        });
        str = str.replace(this.regex.mathInline, function (match, p1, p2) {
            return "\\\\(" + escapeMarkdown(p2) + "\\\\)";
        });
        return str;
    };
    Parser.prototype.parseTags = function (str, globalTags) {
        var e_9, _a;
        var tags = __spreadArray([], __read(globalTags), false);
        if (str) {
            try {
                for (var _b = __values(str.split("#")), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var tag = _c.value;
                    var newTag = tag.trim();
                    if (newTag) {
                        // Replace obsidian hierarchy tags delimeter \ with anki delimeter ::
                        newTag = newTag.replace(this.regex.tagHierarchy, "::");
                        tags.push(newTag);
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        return tags;
    };
    Parser.prototype.getAnkiIDsBlocks = function (file) {
        return Array.from(file.matchAll(/\^(\d{13})\s*/gm));
    };
    Parser.prototype.getEmbedMap = function () {
        var _this = this;
        // key：link url 
        // value： embed content parse from html document
        var embedMap = new Map();
        var embedList = Array.from(document.documentElement.getElementsByClassName('internal-embed'));
        Array.from(embedList).forEach(function (el) {
            // markdown-embed-content markdown-embed-page
            var embedValue = _this.htmlConverter.makeMarkdown(_this.htmlConverter.makeHtml(el.outerHTML).toString());
            var embedKey = el.getAttribute("src");
            embedMap.set(embedKey, embedValue);
            // console.log("embedKey: \n" + embedKey);
            // console.log("embedValue: \n" + embedValue);
        });
        return embedMap;
    };
    Parser.prototype.getEmbedWrapContent = function (embedMap, embedContent) {
        var result = embedContent.match(this.regex.embedBlock);
        while (result = this.regex.embedBlock.exec(embedContent)) {
            // console.log("result[0]: " + result[0]);
            // console.log("embedMap.get(result[1]): " + embedMap.get(result[1]));
            embedContent = embedContent.concat(embedMap.get(result[1]));
        }
        return embedContent;
    };
    return Parser;
}());

var Regex = /** @class */ (function () {
    function Regex(settings) {
        this.update(settings);
    }
    Regex.prototype.update = function (settings) {
        // https://regex101.com/r/BOieWh/1
        this.headingsRegex = /^ {0,3}(#{1,6}) +([^\n]+?) ?((?: *#\S+)*) *$/gim;
        // Supported images https://publish.obsidian.md/help/How+to/Embed+files
        this.wikiImageLinks =
            /!\[\[(.*\.(?:png|jpg|jpeg|gif|bmp|svg|tiff)).*?\]\]/gim;
        this.markdownImageLinks =
            /!\[\]\((.*\.(?:png|jpg|jpeg|gif|bmp|svg|tiff)).*?\)/gim;
        this.wikiAudioLinks =
            /!\[\[(.*\.(?:mp3|webm|wav|m4a|ogg|3gp|flac)).*?\]\]/gim;
        // https://regex101.com/r/eqnJeW/1
        this.obsidianCodeBlock = /(?:```(?:.*?\n?)+?```)(?:\n|$)/gim;
        this.codeBlock = /<code\b[^>]*>(.*?)<\/code>/gims;
        this.mathBlock = /(\$\$)(.*?)(\$\$)/gis;
        this.mathInline = /(\$)(.*?)(\$)/gi;
        this.cardsDeckLine = /cards-deck: [\p{L}]+/giu;
        this.cardsToDelete = /^\s*(?:\n)(?:\^(\d{13}))(?:\n\s*?)?/gm;
        // https://regex101.com/r/WxuFI2/1
        this.globalTagsSplitter =
            /\[\[(.*?)\]\]|#([\p{L}\d:\-_/]+)|([\p{L}\d:\-_/]+)/gimu;
        this.tagHierarchy = /\//gm;
        // Cards
        var flags = "gimu";
        // https://regex101.com/r/p3yQwY/2
        var str = "( {0,3}[#]*)((?:[^\\n]\\n?)+?)(#" +
            settings.flashcardsTag +
            "(?:[/-]reverse)?)((?: *#[\\p{Number}\\p{Letter}\\-\\/_]+)*) *?\\n+((?:[^\\n]\\n?)*?(?=\\^\\d{13}|$))(?:\\^(\\d{13}))?";
        this.flashscardsWithTag = new RegExp(str, flags);
        // https://regex101.com/r/8wmOo8/1
        var sepLongest = settings.inlineSeparator.length >= settings.inlineSeparatorReverse.length ? settings.inlineSeparator : settings.inlineSeparatorReverse;
        var sepShortest = settings.inlineSeparator.length < settings.inlineSeparatorReverse.length ? settings.inlineSeparator : settings.inlineSeparatorReverse;
        // sepLongest is the longest between the inlineSeparator and the inlineSeparatorReverse because if the order is ::|::: then always the first will be matched
        // sepShortest is the shortest
        if (settings.inlineID) {
            str =
                "( {0,3}[#]{0,6})?(?:(?:[\\t ]*)(?:\\d.|[-+*]|#{1,6}))?(.+?) ?(" + sepLongest + "|" + sepShortest + ") ?(.+?)((?: *#[\\p{Letter}\\-\\/_]+)+)?(?:\\s+\\^(\\d{13})|$)";
        }
        else {
            str =
                "( {0,3}[#]{0,6})?(?:(?:[\\t ]*)(?:\\d.|[-+*]|#{1,6}))?(.+?) ?(" + sepLongest + "|" + sepShortest + ") ?(.+?)((?: *#[\\p{Letter}\\-\\/_]+)+|$)(?:\\n\\^(\\d{13}))?";
        }
        this.cardsInlineStyle = new RegExp(str, flags);
        // https://regex101.com/r/HOXF5E/1
        str =
            "( {0,3}[#]*)((?:[^\\n]\\n?)+?)(#" +
                settings.flashcardsTag +
                "[/-]spaced)((?: *#[\\p{Letter}-]+)*) *\\n?(?:\\^(\\d{13}))?";
        this.cardsSpacedStyle = new RegExp(str, flags);
        // https://regex101.com/r/cgtnLf/1
        str = "( {0,3}[#]{0,6})?(?:(?:[\\t ]*)(?:\\d.|[-+*]|#{1,6}))?(.*?(==.+?==|\\{.+?\\}).*?)((?: *#[\\w\\-\\/_]+)+|$)(?:\n\\^(\\d{13}))?";
        this.cardsClozeWholeLine = new RegExp(str, flags);
        this.singleClozeCurly = /((?:{)(?:(\d):?)?(.+?)(?:}))/g;
        this.singleClozeHighlight = /((?:==)(.+?)(?:==))/g;
        // Matches any embedded block but the one with an used extension from the wikilinks
        this.embedBlock = /!\[\[(.*?)(?<!\.(?:png|jpg|jpeg|gif|bmp|svg|tiff|mp3|webm|wav|m4a|ogg|3gp|flac))\]\]/g;
    };
    return Regex;
}());

var CardsService = /** @class */ (function () {
    function CardsService(app, settings) {
        this.app = app;
        this.settings = settings;
        this.regex = new Regex(this.settings);
        this.parser = new Parser(this.regex, this.settings);
        this.anki = new Anki();
    }
    CardsService.prototype.execute = function (activeFile) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.regex.update(this.settings);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.anki.ping()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, ["Error: Anki must be open with AnkiConnect installed."]];
                    case 4: return [2 /*return*/, this.processFile(activeFile)];
                }
            });
        });
    };
    /**
     * Process markdown files in specified folder to generate, update, and delete flashcards.
     * @param folderPath Path of the folder to process
     * @param progressCallback Optional callback function to report progress
     * @returns Array of notification messages
     */
    CardsService.prototype.executeFolder = function (folderPath, progressCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2, files, totalFiles, allNotifications, stats, i, file, fileNotifications, fileNotifications_1, fileNotifications_1_1, notification, err_3;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.regex.update(this.settings);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.anki.ping()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        console.error(err_2);
                        return [2 /*return*/, ["Error: Anki must be open with AnkiConnect installed."]];
                    case 4:
                        files = this.app.vault.getMarkdownFiles().filter(function (file) {
                            var _a;
                            // Include all files in the folder and its subfolders
                            // Special handling for root folder "/"
                            if (folderPath === "/") {
                                return true; // Include all files in vault
                            }
                            return file.path.startsWith(folderPath + "/") || ((_a = file.parent) === null || _a === void 0 ? void 0 : _a.path) === folderPath;
                        });
                        // Log the files being processed for debugging
                        console.log("Processing folder \"".concat(folderPath, "\" with ").concat(files.length, " files:"));
                        files.forEach(function (file) { return console.log("- ".concat(file.path)); });
                        totalFiles = files.length;
                        allNotifications = [];
                        stats = {
                            processed: 0,
                            created: 0,
                            updated: 0,
                            deleted: 0,
                            errors: 0,
                            skipped: 0
                        };
                        // Initialize models only once for all files
                        return [4 /*yield*/, this.anki.createModels(this.settings.sourceSupport)];
                    case 5:
                        // Initialize models only once for all files
                        _b.sent();
                        i = 0;
                        _b.label = 6;
                    case 6:
                        if (!(i < totalFiles)) return [3 /*break*/, 11];
                        file = files[i];
                        // Report progress if callback provided
                        if (progressCallback) {
                            progressCallback(i + 1, totalFiles, file.basename);
                        }
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, this.processFile(file)];
                    case 8:
                        fileNotifications = _b.sent();
                        stats.processed++;
                        try {
                            // Parse notifications to update statistics
                            for (fileNotifications_1 = (e_1 = void 0, __values(fileNotifications)), fileNotifications_1_1 = fileNotifications_1.next(); !fileNotifications_1_1.done; fileNotifications_1_1 = fileNotifications_1.next()) {
                                notification = fileNotifications_1_1.value;
                                if (notification.includes("Inserted successfully")) {
                                    stats.created++;
                                }
                                else if (notification.includes("Updated successfully")) {
                                    stats.updated++;
                                }
                                else if (notification.includes("Deleted successfully")) {
                                    stats.deleted++;
                                }
                                else if (notification.includes("Error")) {
                                    stats.errors++;
                                }
                                else if (notification.includes("Nothing to do")) {
                                    stats.skipped++;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (fileNotifications_1_1 && !fileNotifications_1_1.done && (_a = fileNotifications_1.return)) _a.call(fileNotifications_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (fileNotifications.length > 0) {
                            allNotifications.push("[".concat(file.path, "]: ").concat(fileNotifications.join(', ')));
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        err_3 = _b.sent();
                        console.error("Error processing file ".concat(file.path, ":"), err_3);
                        allNotifications.push("[".concat(file.path, "]: Error - ").concat(err_3.message || "Unknown error"));
                        stats.errors++;
                        return [3 /*break*/, 10];
                    case 10:
                        i++;
                        return [3 /*break*/, 6];
                    case 11:
                        // Add summary statistics
                        allNotifications.unshift("\u5904\u7406\u5B8C\u6210: \u5171\u5904\u7406 ".concat(stats.processed, " \u4E2A\u6587\u4EF6, \u521B\u5EFA ").concat(stats.created, " \u5F20\u5361\u7247, \u66F4\u65B0 ").concat(stats.updated, " \u5F20\u5361\u7247, \u5220\u9664 ").concat(stats.deleted, " \u5F20\u5361\u7247, \u8DF3\u8FC7 ").concat(stats.skipped, " \u4E2A\u6587\u4EF6, \u9519\u8BEF ").concat(stats.errors, " \u4E2A"));
                        if (allNotifications.length === 1 && this.settings.showNoChangesNotice) { // Only the summary line
                            allNotifications.push("\u6587\u4EF6\u5939 \"".concat(folderPath, "\" \u5DF2\u5904\u7406\u3002\u6CA1\u6709\u9700\u8981\u66F4\u6539\u7684\u5185\u5BB9\u3002"));
                        }
                        return [2 /*return*/, allNotifications];
                }
            });
        });
    };
    /**
     * Process all markdown files in the vault to generate, update, and delete flashcards.
     * @param progressCallback Optional callback function to report progress
     * @returns Array of notification messages
     */
    CardsService.prototype.executeAll = function (progressCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var err_4, files, totalFiles, allNotifications, stats, i, file, fileNotifications, fileNotifications_2, fileNotifications_2_1, notification, err_5;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.regex.update(this.settings);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.anki.ping()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _b.sent();
                        console.error(err_4);
                        return [2 /*return*/, ["Error: Anki must be open with AnkiConnect installed."]];
                    case 4:
                        files = this.app.vault.getMarkdownFiles();
                        totalFiles = files.length;
                        allNotifications = [];
                        stats = {
                            processed: 0,
                            created: 0,
                            updated: 0,
                            deleted: 0,
                            errors: 0,
                            skipped: 0
                        };
                        // Initialize models only once for all files
                        return [4 /*yield*/, this.anki.createModels(this.settings.sourceSupport)];
                    case 5:
                        // Initialize models only once for all files
                        _b.sent();
                        i = 0;
                        _b.label = 6;
                    case 6:
                        if (!(i < totalFiles)) return [3 /*break*/, 11];
                        file = files[i];
                        // Report progress if callback provided
                        if (progressCallback) {
                            progressCallback(i + 1, totalFiles, file.basename);
                        }
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, this.processFile(file)];
                    case 8:
                        fileNotifications = _b.sent();
                        stats.processed++;
                        try {
                            // Parse notifications to update statistics
                            for (fileNotifications_2 = (e_2 = void 0, __values(fileNotifications)), fileNotifications_2_1 = fileNotifications_2.next(); !fileNotifications_2_1.done; fileNotifications_2_1 = fileNotifications_2.next()) {
                                notification = fileNotifications_2_1.value;
                                if (notification.includes("Inserted successfully")) {
                                    stats.created++;
                                }
                                else if (notification.includes("Updated successfully")) {
                                    stats.updated++;
                                }
                                else if (notification.includes("Deleted successfully")) {
                                    stats.deleted++;
                                }
                                else if (notification.includes("Error")) {
                                    stats.errors++;
                                }
                                else if (notification.includes("Nothing to do")) {
                                    stats.skipped++;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (fileNotifications_2_1 && !fileNotifications_2_1.done && (_a = fileNotifications_2.return)) _a.call(fileNotifications_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (fileNotifications.length > 0) {
                            allNotifications.push("[".concat(file.path, "]: ").concat(fileNotifications.join(', ')));
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        err_5 = _b.sent();
                        console.error("Error processing file ".concat(file.path, ":"), err_5);
                        allNotifications.push("[".concat(file.path, "]: Error - ").concat(err_5.message || "Unknown error"));
                        stats.errors++;
                        return [3 /*break*/, 10];
                    case 10:
                        i++;
                        return [3 /*break*/, 6];
                    case 11:
                        // Add summary statistics
                        allNotifications.unshift("\u5904\u7406\u5B8C\u6210: \u5171\u5904\u7406 ".concat(stats.processed, " \u4E2A\u6587\u4EF6, \u521B\u5EFA ").concat(stats.created, " \u5F20\u5361\u7247, \u66F4\u65B0 ").concat(stats.updated, " \u5F20\u5361\u7247, \u5220\u9664 ").concat(stats.deleted, " \u5F20\u5361\u7247, \u8DF3\u8FC7 ").concat(stats.skipped, " \u4E2A\u6587\u4EF6, \u9519\u8BEF ").concat(stats.errors, " \u4E2A"));
                        if (allNotifications.length === 1 && this.settings.showNoChangesNotice) { // Only the summary line
                            allNotifications.push("所有文件已处理。没有需要更改的内容。");
                        }
                        return [2 /*return*/, allNotifications];
                }
            });
        });
    };
    /**
     * Process a single file to generate, update, and delete flashcards.
     * @param activeFile The file to process
     * @returns Array of notification messages
     */
    CardsService.prototype.processFile = function (activeFile) {
        return __awaiter(this, void 0, void 0, function () {
            var filePath, sourcePath, fileCachedMetadata, vaultName, globalTags, frontmatter, deckName, _a, ankiBlocks, ankiCards, _b, cards, _c, cardsToCreate, cardsToUpdate, cardsNotInAnki, cardIds, cardsToDelete, cardsNotInAnki_1, cardsNotInAnki_1_1, card, deckNeedToBeChanged, err_6;
            var e_3, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        // Init for the execute phase
                        this.updateFile = false;
                        this.totalOffset = 0;
                        this.notifications = [];
                        filePath = activeFile.basename;
                        sourcePath = activeFile.path;
                        fileCachedMetadata = this.app.metadataCache.getFileCache(activeFile);
                        vaultName = this.app.vault.getName();
                        globalTags = undefined;
                        frontmatter = fileCachedMetadata === null || fileCachedMetadata === void 0 ? void 0 : fileCachedMetadata.frontmatter;
                        deckName = "";
                        if (obsidian.parseFrontMatterEntry(frontmatter, "cards-deck")) {
                            deckName = obsidian.parseFrontMatterEntry(frontmatter, "cards-deck");
                        }
                        else if (this.settings.folderBasedDeck && activeFile.parent.path !== "/") {
                            // If the current file is in the path "programming/java/strings.md" then the deck name is "programming::java"
                            deckName = activeFile.parent.path.split("/").join("::");
                        }
                        else {
                            deckName = this.settings.deck;
                        }
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 11, , 12]);
                        return [4 /*yield*/, this.anki.createDeck(deckName)];
                    case 2:
                        _e.sent();
                        _a = this;
                        return [4 /*yield*/, this.app.vault.read(activeFile)];
                    case 3:
                        _a.file = _e.sent();
                        if (!this.file.endsWith("\n")) {
                            this.file += "\n";
                        }
                        globalTags = this.parseGlobalTags(this.file);
                        ankiBlocks = this.parser.getAnkiIDsBlocks(this.file);
                        if (!ankiBlocks) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.anki.getCards(this.getAnkiIDs(ankiBlocks))];
                    case 4:
                        _b = _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _b = undefined;
                        _e.label = 6;
                    case 6:
                        ankiCards = _b;
                        cards = this.parser.generateFlashcards(this.file, deckName, vaultName, filePath, globalTags);
                        _c = __read(this.filterByUpdate(ankiCards, cards), 3), cardsToCreate = _c[0], cardsToUpdate = _c[1], cardsNotInAnki = _c[2];
                        cardIds = this.getCardsIds(ankiCards, cards);
                        cardsToDelete = this.parser.getCardsToDelete(this.file);
                        console.info("Flashcards for ".concat(filePath, ": Cards to create"));
                        console.info(cardsToCreate);
                        console.info("Flashcards for ".concat(filePath, ": Cards to update"));
                        console.info(cardsToUpdate);
                        console.info("Flashcards for ".concat(filePath, ": Cards to delete"));
                        console.info(cardsToDelete);
                        if (cardsNotInAnki) {
                            console.info("Flashcards for ".concat(filePath, ": Cards not in Anki (maybe deleted)"));
                            try {
                                for (cardsNotInAnki_1 = __values(cardsNotInAnki), cardsNotInAnki_1_1 = cardsNotInAnki_1.next(); !cardsNotInAnki_1_1.done; cardsNotInAnki_1_1 = cardsNotInAnki_1.next()) {
                                    card = cardsNotInAnki_1_1.value;
                                    this.notifications.push("Error: Card with ID ".concat(card.id, " is not in Anki!"));
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (cardsNotInAnki_1_1 && !cardsNotInAnki_1_1.done && (_d = cardsNotInAnki_1.return)) _d.call(cardsNotInAnki_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                        }
                        console.info(cardsNotInAnki);
                        this.insertMedias(cards, sourcePath);
                        return [4 /*yield*/, this.deleteCardsOnAnki(cardsToDelete, ankiBlocks)];
                    case 7:
                        _e.sent();
                        return [4 /*yield*/, this.updateCardsOnAnki(cardsToUpdate)];
                    case 8:
                        _e.sent();
                        return [4 /*yield*/, this.insertCardsOnAnki(cardsToCreate, frontmatter, deckName)];
                    case 9:
                        _e.sent();
                        return [4 /*yield*/, this.deckNeedToBeChanged(cardIds, deckName)];
                    case 10:
                        deckNeedToBeChanged = _e.sent();
                        if (deckNeedToBeChanged) {
                            try {
                                this.anki.changeDeck(cardIds, deckName);
                                this.notifications.push("Cards moved in new deck");
                            }
                            catch (_f) {
                                return [2 /*return*/, ["Error: Could not update deck the file."]];
                            }
                        }
                        // Update file
                        if (this.updateFile) {
                            try {
                                this.app.vault.modify(activeFile, this.file);
                            }
                            catch (err) {
                                return [2 /*return*/, ["Error: Could not update the file."]];
                            }
                        }
                        if (!this.notifications.length && this.settings.showNoChangesNotice) {
                            this.notifications.push("Nothing to do. Everything is up to date");
                        }
                        return [2 /*return*/, this.notifications];
                    case 11:
                        err_6 = _e.sent();
                        console.error(err_6);
                        return [2 /*return*/, ["Error processing file: ".concat(err_6.message || "Unknown error")]];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    CardsService.prototype.insertMedias = function (cards, sourcePath) {
        return __awaiter(this, void 0, void 0, function () {
            var err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        // Currently the media are created for every run, this is not a problem since Anki APIs overwrite the file
                        // A more efficient way would be to keep track of the medias saved
                        return [4 /*yield*/, this.generateMediaLinks(cards, sourcePath)];
                    case 1:
                        // Currently the media are created for every run, this is not a problem since Anki APIs overwrite the file
                        // A more efficient way would be to keep track of the medias saved
                        _a.sent();
                        return [4 /*yield*/, this.anki.storeMediaFiles(cards)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_7 = _a.sent();
                        console.error(err_7);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CardsService.prototype.generateMediaLinks = function (cards, sourcePath) {
        return __awaiter(this, void 0, void 0, function () {
            var cards_1, cards_1_1, card, _a, _b, media, image, binaryMedia, e_4_1, e_5_1;
            var e_5, _c, e_4, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(this.app.vault.adapter instanceof obsidian.FileSystemAdapter)) return [3 /*break*/, 16];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 14, 15, 16]);
                        cards_1 = __values(cards), cards_1_1 = cards_1.next();
                        _e.label = 2;
                    case 2:
                        if (!!cards_1_1.done) return [3 /*break*/, 13];
                        card = cards_1_1.value;
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 10, 11, 12]);
                        _a = (e_4 = void 0, __values(card.mediaNames)), _b = _a.next();
                        _e.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 9];
                        media = _b.value;
                        image = this.app.metadataCache.getFirstLinkpathDest(decodeURIComponent(media), sourcePath);
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.app.vault.readBinary(image)];
                    case 6:
                        binaryMedia = _e.sent();
                        card.mediaBase64Encoded.push(arrayBufferToBase64(binaryMedia));
                        return [3 /*break*/, 8];
                    case 7:
                        _e.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_4_1 = _e.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        cards_1_1 = cards_1.next();
                        return [3 /*break*/, 2];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_5_1 = _e.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (cards_1_1 && !cards_1_1.done && (_c = cards_1.return)) _c.call(cards_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    CardsService.prototype.insertCardsOnAnki = function (cardsToCreate, frontmatter, deckName) {
        return __awaiter(this, void 0, void 0, function () {
            var insertedCards_1, ids, total_1, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cardsToCreate.length) return [3 /*break*/, 4];
                        insertedCards_1 = 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.anki.addCards(cardsToCreate)];
                    case 2:
                        ids = _a.sent();
                        // Add IDs from response to Flashcard[]
                        ids.map(function (id, index) {
                            cardsToCreate[index].id = id;
                        });
                        total_1 = 0;
                        cardsToCreate.forEach(function (card) {
                            if (card.id === null) {
                                new obsidian.Notice("Error, could not add: '".concat(card.initialContent, "'"), noticeTimeout);
                            }
                            else {
                                card.reversed ? (insertedCards_1 += 2) : insertedCards_1++;
                            }
                            card.reversed ? (total_1 += 2) : total_1++;
                        });
                        this.updateFrontmatter(frontmatter, deckName);
                        this.writeAnkiBlocks(cardsToCreate);
                        this.notifications.push("Inserted successfully ".concat(insertedCards_1, "/").concat(total_1, " cards."));
                        return [2 /*return*/, insertedCards_1];
                    case 3:
                        err_9 = _a.sent();
                        console.error(err_9);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CardsService.prototype.updateFrontmatter = function (frontmatter, deckName) {
        var _a, _b;
        var newFrontmatter = "";
        var cardsDeckLine = "cards-deck: ".concat(deckName, "\n");
        if (((_a = frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.position) === null || _a === void 0 ? void 0 : _a.start) && ((_b = frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.position) === null || _b === void 0 ? void 0 : _b.end)) {
            var oldFrontmatter = this.file.substring(frontmatter.position.start.offset, frontmatter.position.end.offset);
            if (!oldFrontmatter.match(this.regex.cardsDeckLine)) {
                newFrontmatter =
                    oldFrontmatter.substring(0, oldFrontmatter.length - 3) +
                        cardsDeckLine +
                        "---";
                this.totalOffset += cardsDeckLine.length;
                this.file =
                    newFrontmatter +
                        this.file.substring(frontmatter.position.end.offset, this.file.length + 1);
            }
        }
        else {
            newFrontmatter = "---\n".concat(cardsDeckLine, "---\n\n");
            this.totalOffset += newFrontmatter.length;
            this.file = newFrontmatter + this.file;
        }
    };
    CardsService.prototype.writeAnkiBlocks = function (cardsToCreate) {
        var e_6, _a;
        try {
            for (var cardsToCreate_1 = __values(cardsToCreate), cardsToCreate_1_1 = cardsToCreate_1.next(); !cardsToCreate_1_1.done; cardsToCreate_1_1 = cardsToCreate_1.next()) {
                var card = cardsToCreate_1_1.value;
                // Card.id cannot be null, because if written already previously it has an ID,
                //   if it has been inserted it has an ID too
                if (card.id !== null && !card.inserted) {
                    var id = card.getIdFormat();
                    if (card instanceof Inlinecard) {
                        if (this.settings.inlineID) {
                            id = " " + id;
                        }
                        else {
                            id = "\n" + id;
                        }
                    }
                    card.endOffset += this.totalOffset;
                    var offset = card.endOffset;
                    this.updateFile = true;
                    this.file =
                        this.file.substring(0, offset) +
                            id +
                            this.file.substring(offset, this.file.length + 1);
                    this.totalOffset += id.length;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (cardsToCreate_1_1 && !cardsToCreate_1_1.done && (_a = cardsToCreate_1.return)) _a.call(cardsToCreate_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    CardsService.prototype.updateCardsOnAnki = function (cards) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (cards.length) {
                    try {
                        this.anki.updateCards(cards);
                        this.notifications.push("Updated successfully ".concat(cards.length, "/").concat(cards.length, " cards."));
                    }
                    catch (err) {
                        console.error(err);
                    }
                    return [2 /*return*/, cards.length];
                }
                return [2 /*return*/];
            });
        });
    };
    CardsService.prototype.deleteCardsOnAnki = function (cards, ankiBlocks) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedCards, ankiBlocks_1, ankiBlocks_1_1, block, id;
            var e_7, _a;
            return __generator(this, function (_b) {
                if (cards.length) {
                    deletedCards = 0;
                    try {
                        for (ankiBlocks_1 = __values(ankiBlocks), ankiBlocks_1_1 = ankiBlocks_1.next(); !ankiBlocks_1_1.done; ankiBlocks_1_1 = ankiBlocks_1.next()) {
                            block = ankiBlocks_1_1.value;
                            id = Number(block[1]);
                            // Deletion of cards that need to be deleted (i.e. blocks ID that don't have content)
                            if (cards.includes(id)) {
                                try {
                                    this.anki.deleteCards(cards);
                                    deletedCards++;
                                    this.updateFile = true;
                                    this.file =
                                        this.file.substring(0, block["index"]) +
                                            this.file.substring(block["index"] + block[0].length, this.file.length);
                                    this.totalOffset -= block[0].length;
                                    this.notifications.push("Deleted successfully ".concat(deletedCards, "/").concat(cards.length, " cards."));
                                }
                                catch (err) {
                                    console.error(err);
                                    Error("Error, could not delete the card from Anki");
                                }
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (ankiBlocks_1_1 && !ankiBlocks_1_1.done && (_a = ankiBlocks_1.return)) _a.call(ankiBlocks_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                    return [2 /*return*/, deletedCards];
                }
                return [2 /*return*/];
            });
        });
    };
    CardsService.prototype.getAnkiIDs = function (blocks) {
        var e_8, _a;
        var IDs = [];
        try {
            for (var blocks_1 = __values(blocks), blocks_1_1 = blocks_1.next(); !blocks_1_1.done; blocks_1_1 = blocks_1.next()) {
                var b = blocks_1_1.value;
                IDs.push(Number(b[1]));
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (blocks_1_1 && !blocks_1_1.done && (_a = blocks_1.return)) _a.call(blocks_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return IDs;
    };
    CardsService.prototype.filterByUpdate = function (ankiCards, generatedCards) {
        var e_9, _a;
        var cardsToCreate = [];
        var cardsToUpdate = [];
        var cardsNotInAnki = [];
        if (ankiCards) {
            var _loop_1 = function (flashcard) {
                // Inserted means that anki blocks are available, that means that the card should
                // 	(the user can always delete it) be in Anki
                var ankiCard = undefined;
                if (flashcard.inserted) {
                    ankiCard = ankiCards.filter(function (card) { return Number(card.noteId) === flashcard.id; })[0];
                    if (!ankiCard) {
                        cardsNotInAnki.push(flashcard);
                    }
                    else if (!flashcard.match(ankiCard)) {
                        flashcard.oldTags = ankiCard.tags;
                        cardsToUpdate.push(flashcard);
                    }
                }
                else {
                    cardsToCreate.push(flashcard);
                }
            };
            try {
                for (var generatedCards_1 = __values(generatedCards), generatedCards_1_1 = generatedCards_1.next(); !generatedCards_1_1.done; generatedCards_1_1 = generatedCards_1.next()) {
                    var flashcard = generatedCards_1_1.value;
                    _loop_1(flashcard);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (generatedCards_1_1 && !generatedCards_1_1.done && (_a = generatedCards_1.return)) _a.call(generatedCards_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        else {
            cardsToCreate = __spreadArray([], __read(generatedCards), false);
        }
        return [cardsToCreate, cardsToUpdate, cardsNotInAnki];
    };
    CardsService.prototype.deckNeedToBeChanged = function (cardsIds, deckName) {
        return __awaiter(this, void 0, void 0, function () {
            var cardsInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.anki.cardsInfo(cardsIds)];
                    case 1:
                        cardsInfo = _a.sent();
                        // console.log("Flashcards: Cards info");
                        // console.log(cardsInfo);
                        if (cardsInfo.length !== 0) {
                            return [2 /*return*/, cardsInfo[0].deckName !== deckName];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    CardsService.prototype.getCardsIds = function (ankiCards, generatedCards) {
        var e_10, _a;
        var ids = [];
        if (ankiCards) {
            var _loop_2 = function (flashcard) {
                var ankiCard = undefined;
                if (flashcard.inserted) {
                    ankiCard = ankiCards.filter(function (card) { return Number(card.noteId) === flashcard.id; })[0];
                    if (ankiCard) {
                        ids = ids.concat(ankiCard.cards);
                    }
                }
            };
            try {
                for (var generatedCards_2 = __values(generatedCards), generatedCards_2_1 = generatedCards_2.next(); !generatedCards_2_1.done; generatedCards_2_1 = generatedCards_2.next()) {
                    var flashcard = generatedCards_2_1.value;
                    _loop_2(flashcard);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (generatedCards_2_1 && !generatedCards_2_1.done && (_a = generatedCards_2.return)) _a.call(generatedCards_2);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        return ids;
    };
    CardsService.prototype.parseGlobalTags = function (file) {
        var globalTags = [];
        var tags = file.match(/(?:cards-)?tags: ?(.*)/im);
        globalTags = tags ? tags[1].match(this.regex.globalTagsSplitter) : [];
        if (globalTags) {
            for (var i = 0; i < globalTags.length; i++) {
                globalTags[i] = globalTags[i].replace("#", "");
                globalTags[i] = globalTags[i].replace(/\//g, "::");
                globalTags[i] = globalTags[i].replace(/\[\[(.*)\]\]/, "$1");
                globalTags[i] = globalTags[i].trim();
                globalTags[i] = globalTags[i].replace(/ /g, "-");
            }
            return globalTags;
        }
        return [];
    };
    return CardsService;
}());

var Ob8AnkiPlugin = /** @class */ (function (_super) {
    __extends(Ob8AnkiPlugin, _super);
    function Ob8AnkiPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ob8AnkiPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var anki, _a, statusBar;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        obsidian.addIcon("ob8anki", flashcardsIcon);
                        anki = new Anki();
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || this.getDefaultSettings();
                        this.cardsService = new CardsService(this.app, this.settings);
                        statusBar = this.addStatusBarItem();
                        this.addCommand({
                            id: 'generate-flashcard-current-file',
                            name: 'Generate for the current file',
                            checkCallback: function (checking) {
                                var activeFile = _this.app.workspace.getActiveFile();
                                if (activeFile) {
                                    if (!checking) {
                                        _this.generateCards(activeFile);
                                    }
                                    return true;
                                }
                                return false;
                            }
                        });
                        this.addCommand({
                            id: 'generate-flashcard-all-files',
                            name: 'Generate for all files in vault',
                            callback: function () {
                                _this.generateCardsForAllFiles();
                            }
                        });
                        this.addRibbonIcon('ob8anki', 'Generate flashcards', function () {
                            var activeFile = _this.app.workspace.getActiveFile();
                            // Check user preference for ribbon icon behavior
                            switch (_this.settings.ribbonAction) {
                                case "all":
                                    _this.generateCardsForAllFiles();
                                    return;
                                case "folder":
                                    if (activeFile) {
                                        _this.generateCardsForCurrentFolder();
                                    }
                                    else {
                                        new ConfirmationModal(_this.app, "No file is currently open. Would you like to process all files in the vault?", function () { return _this.generateCardsForAllFiles(); }).open();
                                    }
                                    return;
                                case "single":
                                default:
                                    if (activeFile) {
                                        _this.generateCards(activeFile);
                                    }
                                    else {
                                        new ConfirmationModal(_this.app, "No file is currently open. Would you like to process all files in the vault?", function () { return _this.generateCardsForAllFiles(); }).open();
                                    }
                            }
                        });
                        this.addSettingTab(new SettingsTab(this.app, this));
                        this.registerInterval(window.setInterval(function () {
                            return anki.ping().then(function () { return statusBar.setText('Anki ⚡️'); }).catch(function () { return statusBar.setText(''); });
                        }, 15 * 1000));
                        return [2 /*return*/];
                }
            });
        });
    };
    Ob8AnkiPlugin.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ob8AnkiPlugin.prototype.getDefaultSettings = function () {
        return {
            contextAwareMode: true,
            sourceSupport: false,
            codeHighlightSupport: false,
            inlineID: false,
            contextSeparator: " > ",
            deck: "Default",
            folderBasedDeck: true,
            flashcardsTag: "card",
            inlineSeparator: "::",
            inlineSeparatorReverse: ":::",
            defaultAnkiTag: "obsidian",
            ankiConnectPermission: false,
            ribbonAction: "single",
            showNoChangesNotice: true // Default to showing no changes notice
        };
    };
    Ob8AnkiPlugin.prototype.generateCards = function (activeFile) {
        this.cardsService.execute(activeFile).then(function (res) {
            var e_1, _a;
            try {
                for (var res_1 = __values(res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
                    var r = res_1_1.value;
                    new obsidian.Notice(r, noticeTimeout);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (res_1_1 && !res_1_1.done && (_a = res_1.return)) _a.call(res_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(res);
        }).catch(function (err) {
        });
    };
    Ob8AnkiPlugin.prototype.generateCardsForCurrentFolder = function () {
        var _this = this;
        var _a;
        var activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new obsidian.Notice("请先打开一个文件以确定要处理的文件夹", noticeTimeout);
            return;
        }
        var folderPath = (_a = activeFile.parent) === null || _a === void 0 ? void 0 : _a.path;
        if (!folderPath) {
            new obsidian.Notice("无法确定当前文件夹", noticeTimeout);
            return;
        }
        // Create progress element
        var progressContainer = document.createElement('div');
        progressContainer.className = 'ob8anki-progress';
        progressContainer.innerHTML = "\n\t\t\t<div>\u5904\u7406\u8FDB\u5EA6: <span id=\"ob8anki-current\">0</span>/<span id=\"ob8anki-total\">\u8BA1\u7B97\u4E2D...</span></div>\n\t\t\t<div>\u5F53\u524D\u6587\u4EF6: <span id=\"ob8anki-filename\">\u51C6\u5907\u4E2D...</span></div>\n\t\t\t<div>\u5F53\u524D\u6587\u4EF6\u5939: ".concat(folderPath, "</div>\n\t\t\t<div class=\"ob8anki-progress-bar\" style=\"width: 0%\"></div>\n\t\t");
        document.body.appendChild(progressContainer);
        // Get elements for updating
        var currentElement = document.getElementById('ob8anki-current');
        var filenameElement = document.getElementById('ob8anki-filename');
        var progressBarElement = progressContainer.querySelector('.ob8anki-progress-bar');
        // Progress callback function
        var updateProgress = function (current, total, filename) {
            if (currentElement)
                currentElement.textContent = current.toString();
            if (filenameElement)
                filenameElement.textContent = filename;
            if (progressBarElement) {
                var percentage = Math.round((current / total) * 100);
                progressBarElement.setAttribute('style', "width: ".concat(percentage, "%"));
            }
        };
        // Process folder files with progress tracking
        this.cardsService.executeFolder(folderPath, updateProgress).then(function (res) {
            // Remove progress element
            document.body.removeChild(progressContainer);
            // Show results in a modal for better readability
            new ResultsModal(_this.app, "\u6587\u4EF6\u5939 \"".concat(folderPath, "\" \u5904\u7406\u7ED3\u679C"), res).open();
            // Also log results to console
            console.log("Flashcards generation for folder \"".concat(folderPath, "\" completed:"), res);
        }).catch(function (err) {
            // Remove progress element and show error
            document.body.removeChild(progressContainer);
            new obsidian.Notice("\u5904\u7406\u6587\u4EF6\u5939 \"".concat(folderPath, "\" \u65F6\u51FA\u9519: ").concat(err.message || "未知错误"), noticeTimeout);
            console.error(err);
        });
    };
    Ob8AnkiPlugin.prototype.generateCardsForAllFiles = function () {
        var _this = this;
        // Get total number of files
        var totalFiles = this.app.vault.getMarkdownFiles().length;
        // Create progress element
        var progressContainer = document.createElement('div');
        progressContainer.className = 'ob8anki-progress';
        progressContainer.innerHTML = "\n\t\t\t<div>\u5904\u7406\u8FDB\u5EA6: <span id=\"ob8anki-current\">0</span>/<span id=\"ob8anki-total\">".concat(totalFiles, "</span></div>\n\t\t\t<div>\u5F53\u524D\u6587\u4EF6: <span id=\"ob8anki-filename\">\u51C6\u5907\u4E2D...</span></div>\n\t\t\t<div class=\"ob8anki-progress-bar\" style=\"width: 0%\"></div>\n\t\t");
        document.body.appendChild(progressContainer);
        // Get elements for updating
        var currentElement = document.getElementById('ob8anki-current');
        var filenameElement = document.getElementById('ob8anki-filename');
        var progressBarElement = progressContainer.querySelector('.ob8anki-progress-bar');
        // Progress callback function
        var updateProgress = function (current, total, filename) {
            if (currentElement)
                currentElement.textContent = current.toString();
            if (filenameElement)
                filenameElement.textContent = filename;
            if (progressBarElement) {
                var percentage = Math.round((current / total) * 100);
                progressBarElement.setAttribute('style', "width: ".concat(percentage, "%"));
            }
        };
        // Process all files with progress tracking
        this.cardsService.executeAll(updateProgress).then(function (res) {
            // Remove progress element
            document.body.removeChild(progressContainer);
            // Show results in a modal for better readability
            new ResultsModal(_this.app, "记忆卡片生成结果", res).open();
            // Also log results to console
            console.log("Flashcards generation for all files completed:", res);
        }).catch(function (err) {
            // Remove progress element and show error
            document.body.removeChild(progressContainer);
            new obsidian.Notice("\u5904\u7406\u6240\u6709\u6587\u4EF6\u65F6\u51FA\u9519: ".concat(err.message || "未知错误"), noticeTimeout);
            console.error(err);
        });
    };
    return Ob8AnkiPlugin;
}(obsidian.Plugin));
// Modal for confirmation dialogs
var ConfirmationModal = /** @class */ (function (_super) {
    __extends(ConfirmationModal, _super);
    function ConfirmationModal(app, message, onConfirm) {
        var _this = _super.call(this, app) || this;
        _this.message = message;
        _this.onConfirm = onConfirm;
        return _this;
    }
    ConfirmationModal.prototype.onOpen = function () {
        var _this = this;
        var contentEl = this.contentEl;
        contentEl.createEl("h2", { text: "Confirmation" });
        contentEl.createEl("p", { text: this.message });
        var buttonContainer = contentEl.createDiv();
        buttonContainer.addClass("ob8anki-modal-buttons");
        var confirmButton = buttonContainer.createEl("button", { text: "Yes" });
        confirmButton.addEventListener("click", function () {
            _this.onConfirm();
            _this.close();
        });
        var cancelButton = buttonContainer.createEl("button", { text: "No" });
        cancelButton.addEventListener("click", function () {
            _this.close();
        });
    };
    ConfirmationModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return ConfirmationModal;
}(obsidian.Modal));
// Modal for displaying results
var ResultsModal = /** @class */ (function (_super) {
    __extends(ResultsModal, _super);
    function ResultsModal(app, title, results) {
        var _this = _super.call(this, app) || this;
        _this.title = title;
        _this.results = results;
        return _this;
    }
    ResultsModal.prototype.onOpen = function () {
        var e_2, _a;
        var _this = this;
        var contentEl = this.contentEl;
        contentEl.createEl("h2", { text: this.title });
        var resultsContainer = contentEl.createDiv();
        resultsContainer.addClass("ob8anki-results-container");
        if (this.results.length > 0) {
            var resultsList = resultsContainer.createEl("ul");
            try {
                for (var _b = __values(this.results), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var result = _c.value;
                    resultsList.createEl("li", { text: result });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            resultsContainer.createEl("p", { text: "No results to display." });
        }
        var buttonContainer = contentEl.createDiv();
        buttonContainer.addClass("ob8anki-modal-buttons");
        var closeButton = buttonContainer.createEl("button", { text: "Close" });
        closeButton.addEventListener("click", function () {
            _this.close();
        });
    };
    ResultsModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return ResultsModal;
}(obsidian.Modal));

module.exports = Ob8AnkiPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9jb25mL2NvbnN0YW50cy50cyIsInNyYy9zZXJ2aWNlcy9hbmtpLnRzIiwic3JjL3V0aWxzLnRzIiwic3JjL2d1aS9zZXR0aW5ncy10YWIudHMiLCJub2RlX21vZHVsZXMvc2hvd2Rvd24vZGlzdC9zaG93ZG93bi5qcyIsInNyYy9lbnRpdGllcy9jYXJkLnRzIiwic3JjL2VudGl0aWVzL2ZsYXNoY2FyZC50cyIsInNyYy9lbnRpdGllcy9pbmxpbmVjYXJkLnRzIiwic3JjL2VudGl0aWVzL3NwYWNlZGNhcmQudHMiLCJzcmMvZW50aXRpZXMvY2xvemVjYXJkLnRzIiwic3JjL3NlcnZpY2VzL3BhcnNlci50cyIsInNyYy9jb25mL3JlZ2V4LnRzIiwic3JjL3NlcnZpY2VzL2NhcmRzLnRzIiwibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiU2V0dGluZyIsIk5vdGljZSIsIlBsdWdpblNldHRpbmdUYWIiLCJ0aGlzIiwic2hvd2Rvd24uQ29udmVydGVyIiwicGFyc2VGcm9udE1hdHRlckVudHJ5IiwiRmlsZVN5c3RlbUFkYXB0ZXIiLCJhZGRJY29uIiwiUGx1Z2luIiwiTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQW9GRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDck0sSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hLLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUN0RCxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FB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QUM3RSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDbkUsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2pFLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNuRSxTQUFTO0FBQ1QsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0YsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7QUFDdkQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3RCxLQUFLO0FBQ0wsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QixHQUFHO0FB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QUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDM0IsSUFBSSxPQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUMzQixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNDO0FBQ0EsRUFBRSxRQUFRLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRyxNQUFNLE1BQU07QUFDWixJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRyxNQUFNLE1BQU07QUFDWixJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRyxNQUFNLE1BQU07QUFDWixJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRyxNQUFNLE1BQU07QUFDWixJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRyxNQUFNLE1BQU07QUFDWixJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRyxNQUFNLE1BQU07QUFDWjtBQUNBLElBQUksS0FBSyxHQUFHO0FBQ1osTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDckcsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssWUFBWTtBQUNyQixNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUN0RyxNQUFNLE1BQU07QUFDWjtBQUNBLElBQUksS0FBSyxJQUFJO0FBQ2IsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDOUYsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUN0RyxNQUFNLE1BQU07QUFDWjtBQUNBLElBQUksS0FBSyxJQUFJO0FBQ2IsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFO0FBQ3RHLE1BQU0sTUFBTTtBQUNaO0FBQ0EsSUFBSSxLQUFLLFNBQVM7QUFDbEIsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDckcsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssS0FBSztBQUNkLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFO0FBQy9GLE1BQU0sTUFBTTtBQUNaO0FBQ0EsSUFBSSxLQUFLLE9BQU87QUFDaEIsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDakcsTUFBTSxNQUFNO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQUssTUFBTTtBQUNmLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkUsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLEdBQUc7QUFDWixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sTUFBTTtBQUNaO0FBQ0EsSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNsQixJQUFJLEtBQUssR0FBRztBQUNaLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckUsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssS0FBSztBQUNkLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUUsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssR0FBRztBQUNaLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEUsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJLEtBQUssS0FBSztBQUNkLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEUsTUFBTSxNQUFNO0FBQ1o7QUFDQSxJQUFJO0FBQ0osTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDcEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUV0RTtBQUNBLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2YsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtBQUM1QixJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVO0FBQ2xDLFFBQVEsY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDekMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzdDLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0UsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25CO0FBQ0EsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUVoRTtBQUNBLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxFQUFFLE9BQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQSxRQUFRLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUUxRTtBQUNBLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2YsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtBQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDaEIsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVTtBQUNsQyxRQUFRLGNBQWMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3pDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUM3QyxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzNFLEtBQUs7QUFDTCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNILEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLElBQUksRUFBRSxPQUFPLEVBQUU7QUFFbkU7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNmLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7QUFDNUIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQ2hCLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVU7QUFDbEMsUUFBUSxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUN6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDN0MsTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRSxLQUFLO0FBQ0wsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBRWxFO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQ2QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzNCLE1BQU0sUUFBUSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7QUFDdkQsTUFBTSxJQUFJLFNBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztBQUNwRCxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDWixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUN4QyxJQUFJLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO0FBQ3hGLFFBQVEsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN2QjtBQUNBLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzNDLE1BQU0sSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLE1BQU0sUUFBUSxLQUFLO0FBQ25CLFFBQVEsS0FBSyxrQkFBa0I7QUFDL0IsVUFBVSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzFCLFVBQVUsTUFBTTtBQUNoQixRQUFRLEtBQUssbUJBQW1CO0FBQ2hDLFVBQVUsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMxQixVQUFVLE1BQU07QUFDaEIsUUFBUSxLQUFLLG9CQUFvQjtBQUNqQyxVQUFVLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDM0IsVUFBVSxNQUFNO0FBQ2hCLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUM5QixHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNwQyxJQUFJLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUNuQyxRQUFRLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQ7QUFDQSxJQUFJLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM3QyxNQUFNLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUM1QixNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssV0FBVyxFQUFFO0FBQzNDLFFBQVEsV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEYsT0FBTztBQUNQLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDMUIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDMUMsSUFBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDbEQsTUFBTSxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzVDLE1BQU0sSUFBSSxNQUFNLEdBQUcsZUFBZSxFQUFFO0FBQ3BDLFFBQVEsZUFBZSxHQUFHLE1BQU0sQ0FBQztBQUNqQyxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzFDLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2xELE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25CLFFBQVEsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0FBQ2pELFVBQVUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNsSCxTQUFTLE1BQU07QUFDZixVQUFVLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFD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
