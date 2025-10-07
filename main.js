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

// 国际化类型定义文件
// 可用语言列表
var AVAILABLE_LANGUAGES = [
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' }
];
// 默认语言
var DEFAULT_LANGUAGE = 'zh';

var zhTranslations = {
    settings: {
        title: '闪卡 - 设置',
        language: {
            name: '界面语言',
            desc: '选择界面显示语言',
            chinese: '中文',
            english: 'English',
            german: 'Deutsch'
        },
        ankiConnect: {
            description: '这只需要做一次。打开 Anki 并点击按钮来授予权限。',
            requirement: '需要 AnkiConnect 插件',
            givePermission: '授予权限',
            grantPermission: '授予权限',
            permissionGranted: 'Anki Connect 权限已授予',
            permissionNotGranted: 'AnkiConnect 权限未授予',
            connectionError: '出现错误，Anki 是否已打开？',
            testAnki: '测试 Anki',
            testDesc: '测试 Anki 和 Obsidian 之间的连接是否正常工作。',
            test: '测试',
            testSuccess: 'Anki 连接正常',
            testFailed: 'Anki 连接失败'
        },
        general: {
            title: '通用设置',
            contextAware: {
                name: '上下文感知模式',
                desc: '将祖先标题添加到闪卡的问题中。'
            },
            sourceSupport: {
                name: '源支持',
                desc: '为每张卡片添加源，即指向原始卡片的链接。注意：没有源支持的旧卡片无法更新。'
            },
            inlineID: {
                name: '内联 ID 支持',
                desc: '在内联卡片的行末添加 ID。'
            },
            folderBasedDeck: {
                name: '基于文件夹的牌组名称',
                desc: '根据文件夹路径自动生成牌组名称。'
            },
            defaultDeck: {
                name: '默认牌组名称',
                desc: '未指定时卡片将添加到的默认牌组名称。',
                placeholder: '牌组::子牌组',
                error: '牌组名称必须至少包含 1 个字符'
            },
            defaultAnkiTag: {
                name: '默认 Anki 标签',
                desc: '此标签将添加到 Anki 上生成的每张卡片',
                placeholder: 'Anki 标签',
                noTagNotice: '不会添加默认标签'
            }
        },
        cardIdentification: {
            title: '卡片识别',
            flashcardsTag: {
                name: '闪卡 #标签',
                desc: '用于识别笔记中闪卡的标签（不区分大小写）。',
                placeholder: '卡片',
                error: '标签必须至少包含 1 个字符'
            },
            inlineSeparator: {
                name: '内联卡片分隔符',
                desc: '用于识别笔记中内联卡片的分隔符。',
                lengthError: '分隔符必须至少包含 1 个字符',
                duplicateError: '分隔符必须与内联反向分隔符不同',
                changed: '分隔符已更改'
            },
            inlineReverseSeparator: {
                name: '内联反向卡片分隔符',
                desc: '用于识别笔记中内联反向卡片的分隔符。',
                lengthError: '分隔符必须至少包含 1 个字符',
                duplicateError: '分隔符必须与内联分隔符不同',
                changed: '分隔符已更改'
            }
        },
        ribbonIcon: {
            title: '功能区图标行为',
            action: {
                name: '功能区图标操作',
                desc: '选择点击功能区图标时的操作',
                single: '处理当前文件',
                folder: '处理当前文件夹',
                all: '处理所有文件'
            }
        },
        notifications: {
            title: '通知设置',
            showNoChanges: {
                name: '显示无更改通知',
                desc: '当文件不需要更改时显示通知'
            }
        }
    },
    // 命令相关
    commands: {
        generateCurrentFile: '为当前文件生成闪卡',
        generateAllFiles: '为所有文件生成闪卡',
        generateFlashcards: '生成闪卡'
    },
    // 界面相关
    ui: {
        processingProgress: '处理进度',
        currentFile: '当前文件',
        currentFolder: '当前文件夹',
        calculating: '计算中...',
        preparing: '准备中...',
        folderProcessingResults: '文件夹处理结果',
        flashcardsGenerationResults: '记忆卡片生成结果',
        processingError: '处理时出错',
        unknownError: '未知错误',
        openFileFirst: '请先打开一个文件以确定要处理的文件夹',
        cannotDetermineFolder: '无法确定当前文件夹',
        processAllFilesPrompt: '当前没有打开文件。是否要处理库中的所有文件？',
        confirmation: '确认',
        yes: '是',
        no: '否',
        noResultsToDisplay: '没有结果可显示。',
        close: '关闭'
    },
    processing: {
        errors: {
            ankiNotOpen: 'Anki 未打开或 AnkiConnect 未运行',
            couldNotUpdateDeck: '无法更新牌组',
            couldNotUpdateFile: '无法更新文件',
            couldNotUploadMedia: '无法上传媒体文件',
            couldNotReadMedia: '无法读取媒体文件',
            couldNotWriteCards: '无法写入卡片',
            couldNotUpdateCards: '无法更新卡片',
            couldNotDeleteCard: '无法删除卡片',
            somethingWentWrong: '出现了问题',
            unknownError: '未知错误',
            failedToIssueRequest: '请求发送失败',
            unexpectedNumberOfFields: '字段数量不符合预期',
            missingErrorField: '缺少错误字段',
            missingResultField: '缺少结果字段'
        },
        success: {
            cardsMoved: '卡片已移动到新牌组',
            nothingToDo: '无需操作。一切都是最新的',
            folderProcessed: '文件夹已处理。没有需要更改的内容。',
            noChangesNeeded: '没有需要更改的内容'
        },
        stats: {
            filesProcessed: '已处理文件',
            cardsCreated: '已创建卡片',
            cardsUpdated: '已更新卡片',
            cardsDeleted: '已删除卡片',
            cardsSkipped: '已跳过卡片',
            cardsError: '错误卡片'
        }
    },
    notifications: {
        insertedSuccessfully: '创建成功',
        updatedSuccessfully: '更新成功',
        deletedSuccessfully: '删除成功',
        error: '错误',
        nothingToDo: '无需更改',
        unknownError: '未知错误',
        cards: '张卡片',
        allFilesProcessedNoChanges: '所有文件已处理。没有需要更改的内容。',
        processingComplete: '处理完成: 共处理 {{processed}} 个文件, 创建 {{created}} 张卡片, 更新 {{updated}} 张卡片, 删除 {{deleted}} 张卡片, 跳过 {{skipped}} 个文件, 错误 {{errors}} 个',
        cardNotInAnki: 'ID为 {{id}} 的卡片不在 Anki 中！',
        cardsMovedToDeck: '卡片已移动到新牌组',
        everythingUpToDate: '一切都是最新的',
        couldNotUploadMedia: '无法上传媒体文件',
        couldNotReadMedia: '无法读取媒体文件',
        couldNotWriteCards: '无法在 Anki 中写入卡片',
        couldNotUpdateCards: '无法在 Anki 中更新卡片',
        couldNotDeleteCard: '无法从 Anki 中删除卡片',
        couldNotUpdateDeck: '无法更新牌组',
        couldNotUpdateFile: '无法更新文件',
        ankiConnectNotRunning: 'Anki Connect 未运行。请确保 Anki 已打开并安装了 AnkiConnect 插件。',
        ankiConnectTestSuccess: 'Anki Connect 连接成功！',
        ankiConnectTestFailed: 'Anki Connect 连接失败',
        settingsUpdated: '设置已更新',
        languageChanged: '语言已切换'
    },
    anki: {
        models: {
            frontBack: '正面 / 背面',
            backFront: '背面 / 正面',
            cloze: '填空',
            spaced: '间隔'
        },
        fields: {
            front: '正面',
            back: '背面',
            prompt: '提示',
            text: '文本',
            extra: '额外',
            source: '来源'
        }
    }
};

var enTranslations = {
    settings: {
        title: 'Flashcards - Settings',
        language: {
            name: 'Interface Language',
            desc: 'Choose interface display language',
            chinese: '中文',
            english: 'English',
            german: 'Deutsch'
        },
        ankiConnect: {
            description: 'This only needs to be done once. Open Anki and click the button to grant permission.',
            requirement: 'AnkiConnect plugin required',
            givePermission: 'Give Permission',
            grantPermission: 'Grant Permission',
            permissionGranted: 'Anki Connect permission granted',
            permissionNotGranted: 'AnkiConnect permission not granted',
            connectionError: 'An error occurred, is Anki open?',
            testAnki: 'Test Anki',
            testDesc: 'Test if the connection between Anki and Obsidian is working properly.',
            test: 'Test',
            testSuccess: 'Anki connection works',
            testFailed: 'Anki connection failed'
        },
        general: {
            title: 'General Settings',
            contextAware: {
                name: 'Context-aware mode',
                desc: 'Add ancestor headings to flashcard questions.'
            },
            sourceSupport: {
                name: 'Source support',
                desc: 'Add source to each card, i.e., a link to the original card. Note: Old cards without source support cannot be updated.'
            },
            inlineID: {
                name: 'Inline ID support',
                desc: 'Add ID at the end of inline card lines.'
            },
            folderBasedDeck: {
                name: 'Folder-based deck name',
                desc: 'Automatically generate deck names based on folder path.'
            },
            defaultDeck: {
                name: 'Default deck name',
                desc: 'Default deck name where cards will be added when not specified.',
                placeholder: 'Deck::Subdeck',
                error: 'Deck name must contain at least 1 character'
            },
            defaultAnkiTag: {
                name: 'Default Anki tag',
                desc: 'This tag will be added to every card generated on Anki',
                placeholder: 'Anki tag',
                noTagNotice: 'No default tag will be added'
            }
        },
        cardIdentification: {
            title: 'Cards Identification',
            flashcardsTag: {
                name: 'Flashcards #tag',
                desc: 'Tag used to identify flashcards in notes (case insensitive).',
                placeholder: 'card',
                error: 'Tag must contain at least 1 character'
            },
            inlineSeparator: {
                name: 'Inline card separator',
                desc: 'Separator used to identify inline cards in notes.',
                lengthError: 'Separator must contain at least 1 character',
                duplicateError: 'Separator must be different from inline reverse separator',
                changed: 'Separator changed'
            },
            inlineReverseSeparator: {
                name: 'Inline reverse card separator',
                desc: 'Separator used to identify inline reverse cards in notes.',
                lengthError: 'Separator must contain at least 1 character',
                duplicateError: 'Separator must be different from inline separator',
                changed: 'Separator changed'
            }
        },
        ribbonIcon: {
            title: 'Ribbon Icon Behavior',
            action: {
                name: 'Ribbon icon action',
                desc: 'Choose action when clicking the ribbon icon',
                single: 'Process current file',
                folder: 'Process current folder',
                all: 'Process all files'
            }
        },
        notifications: {
            title: 'Notification Settings',
            showNoChanges: {
                name: 'Show no changes notice',
                desc: 'Show notification when file needs no changes'
            }
        }
    },
    processing: {
        errors: {
            ankiNotOpen: 'Anki is not open or AnkiConnect is not running',
            couldNotUpdateDeck: 'Could not update deck',
            couldNotUpdateFile: 'Could not update file',
            couldNotUploadMedia: 'Could not upload media file',
            couldNotReadMedia: 'Could not read media file',
            couldNotWriteCards: 'Could not write cards',
            couldNotUpdateCards: 'Could not update cards',
            couldNotDeleteCard: 'Could not delete card',
            somethingWentWrong: 'Something went wrong',
            unknownError: 'Unknown error',
            failedToIssueRequest: 'Failed to issue request',
            unexpectedNumberOfFields: 'Unexpected number of fields',
            missingErrorField: 'Missing error field',
            missingResultField: 'Missing result field'
        },
        success: {
            cardsMoved: 'Cards moved in new deck',
            nothingToDo: 'Nothing to do. Everything is up to date',
            folderProcessed: 'Folder processed. No changes needed.',
            noChangesNeeded: 'No changes needed'
        },
        stats: {
            filesProcessed: 'Files processed',
            cardsCreated: 'Cards created',
            cardsUpdated: 'Cards updated',
            cardsDeleted: 'Cards deleted',
            cardsSkipped: 'Cards skipped',
            cardsError: 'Cards with errors'
        }
    },
    notifications: {
        insertedSuccessfully: 'Inserted successfully',
        updatedSuccessfully: 'Updated successfully',
        deletedSuccessfully: 'Deleted successfully',
        error: 'Error',
        nothingToDo: 'Nothing to do',
        unknownError: 'Unknown error',
        cards: 'cards',
        allFilesProcessedNoChanges: 'All files processed. No changes needed.',
        processingComplete: 'Processing complete: {{processed}} files processed, {{created}} cards created, {{updated}} cards updated, {{deleted}} cards deleted, {{skipped}} files skipped, {{errors}} errors',
        cardNotInAnki: 'Card with ID {{id}} is not in Anki!',
        cardsMovedToDeck: 'Cards moved to new deck',
        everythingUpToDate: 'Everything is up to date',
        couldNotUploadMedia: 'Could not upload media files',
        couldNotReadMedia: 'Could not read media files',
        couldNotWriteCards: 'Could not write cards to Anki',
        couldNotUpdateCards: 'Could not update cards in Anki',
        couldNotDeleteCard: 'Could not delete card from Anki',
        couldNotUpdateDeck: 'Could not update deck',
        couldNotUpdateFile: 'Could not update file',
        ankiConnectNotRunning: 'Anki Connect is not running. Please ensure Anki is open and AnkiConnect plugin is installed.',
        ankiConnectTestSuccess: 'Anki Connect connection successful!',
        ankiConnectTestFailed: 'Anki Connect connection failed',
        settingsUpdated: 'Settings updated',
        languageChanged: 'Language changed'
    },
    // Commands
    commands: {
        generateCurrentFile: 'Generate for the current file',
        generateAllFiles: 'Generate for all files in vault',
        generateFlashcards: 'Generate flashcards'
    },
    // UI
    ui: {
        processingProgress: 'Processing Progress',
        currentFile: 'Current File',
        currentFolder: 'Current Folder',
        calculating: 'Calculating...',
        preparing: 'Preparing...',
        folderProcessingResults: 'Folder Processing Results',
        flashcardsGenerationResults: 'Flashcards Generation Results',
        processingError: 'Processing Error',
        unknownError: 'Unknown Error',
        openFileFirst: 'Please open a file first to determine the folder to process',
        cannotDetermineFolder: 'Cannot determine current folder',
        processAllFilesPrompt: 'No file is currently open. Would you like to process all files in the vault?',
        confirmation: 'Confirmation',
        yes: 'Yes',
        no: 'No',
        noResultsToDisplay: 'No results to display.',
        close: 'Close'
    },
    anki: {
        models: {
            frontBack: 'Front / Back',
            backFront: 'Back / Front',
            cloze: 'Cloze',
            spaced: 'Spaced'
        },
        fields: {
            front: 'Front',
            back: 'Back',
            prompt: 'Prompt',
            text: 'Text',
            extra: 'Extra',
            source: 'Source'
        }
    }
};

var deTranslations = {
    settings: {
        title: 'Karteikarten - Einstellungen',
        language: {
            name: 'Oberflächensprache',
            desc: 'Wählen Sie die Anzeigesprache der Oberfläche',
            chinese: '中文',
            english: 'English',
            german: 'Deutsch'
        },
        ankiConnect: {
            description: 'Dies muss nur einmal gemacht werden. Öffnen Sie Anki und klicken Sie auf die Schaltfläche, um die Berechtigung zu erteilen.',
            requirement: 'AnkiConnect Plugin erforderlich',
            givePermission: 'Berechtigung erteilen',
            grantPermission: 'Berechtigung gewähren',
            permissionGranted: 'Anki Connect Berechtigung erteilt',
            permissionNotGranted: 'AnkiConnect Berechtigung nicht erteilt',
            connectionError: 'Ein Fehler ist aufgetreten, ist Anki geöffnet?',
            testAnki: 'Anki testen',
            testDesc: 'Testen Sie, ob die Verbindung zwischen Anki und Obsidian ordnungsgemäß funktioniert.',
            test: 'Testen',
            testSuccess: 'Anki-Verbindung funktioniert',
            testFailed: 'Anki-Verbindung fehlgeschlagen'
        },
        general: {
            title: 'Allgemeine Einstellungen',
            contextAware: {
                name: 'Kontextbewusster Modus',
                desc: 'Fügen Sie Vorfahren-Überschriften zu Karteikarten-Fragen hinzu.'
            },
            sourceSupport: {
                name: 'Quellunterstützung',
                desc: 'Fügen Sie jeder Karte eine Quelle hinzu, d.h. einen Link zur ursprünglichen Karte. Hinweis: Alte Karten ohne Quellunterstützung können nicht aktualisiert werden.'
            },
            inlineID: {
                name: 'Inline-ID-Unterstützung',
                desc: 'ID am Ende der Inline-Kartenzeilen hinzufügen.'
            },
            folderBasedDeck: {
                name: 'Ordnerbasierter Stapelname',
                desc: 'Stapelnamen automatisch basierend auf dem Ordnerpfad generieren.'
            },
            defaultDeck: {
                name: 'Standard-Stapelname',
                desc: 'Standard-Stapelname, zu dem Karten hinzugefügt werden, wenn nicht angegeben.',
                placeholder: 'Stapel::Unterstapel',
                error: 'Stapelname muss mindestens 1 Zeichen enthalten'
            },
            defaultAnkiTag: {
                name: 'Standard-Anki-Tag',
                desc: 'Dieses Tag wird zu jeder auf Anki generierten Karte hinzugefügt',
                placeholder: 'Anki-Tag',
                noTagNotice: 'Kein Standard-Tag wird hinzugefügt'
            }
        },
        cardIdentification: {
            title: 'Kartenerkennung',
            flashcardsTag: {
                name: 'Karteikarten #Tag',
                desc: 'Tag zur Identifizierung von Karteikarten in Notizen (nicht case-sensitive).',
                placeholder: 'Karte',
                error: 'Tag muss mindestens 1 Zeichen enthalten'
            },
            inlineSeparator: {
                name: 'Inline-Karten-Trennzeichen',
                desc: 'Trennzeichen zur Identifizierung von Inline-Karten in Notizen.',
                lengthError: 'Trennzeichen muss mindestens 1 Zeichen enthalten',
                duplicateError: 'Trennzeichen muss sich vom Inline-Rückwärts-Trennzeichen unterscheiden',
                changed: 'Trennzeichen geändert'
            },
            inlineReverseSeparator: {
                name: 'Inline-Rückwärts-Karten-Trennzeichen',
                desc: 'Trennzeichen zur Identifizierung von Inline-Rückwärts-Karten in Notizen.',
                lengthError: 'Trennzeichen muss mindestens 1 Zeichen enthalten',
                duplicateError: 'Trennzeichen muss sich vom Inline-Trennzeichen unterscheiden',
                changed: 'Trennzeichen geändert'
            }
        },
        ribbonIcon: {
            title: 'Ribbon-Icon-Verhalten',
            action: {
                name: 'Ribbon-Icon-Aktion',
                desc: 'Wählen Sie die Aktion beim Klicken auf das Ribbon-Icon',
                single: 'Aktuelle Datei verarbeiten',
                folder: 'Aktuellen Ordner verarbeiten',
                all: 'Alle Dateien verarbeiten'
            }
        },
        notifications: {
            title: 'Benachrichtigungseinstellungen',
            showNoChanges: {
                name: 'Keine-Änderungen-Benachrichtigung anzeigen',
                desc: 'Benachrichtigung anzeigen, wenn Datei keine Änderungen benötigt'
            }
        }
    },
    processing: {
        errors: {
            ankiNotOpen: 'Fehler: Anki muss mit installiertem AnkiConnect geöffnet sein.',
            couldNotUpdateDeck: 'Fehler: Stapel-Datei konnte nicht aktualisiert werden.',
            couldNotUpdateFile: 'Fehler: Datei konnte nicht aktualisiert werden.',
            couldNotUploadMedia: 'Fehler: Medien konnten nicht hochgeladen werden',
            couldNotReadMedia: 'Fehler: Medien konnten nicht gelesen werden',
            couldNotWriteCards: 'Fehler: Karten konnten nicht in Anki geschrieben werden',
            couldNotUpdateCards: 'Fehler: Karten konnten nicht in Anki aktualisiert werden',
            couldNotDeleteCard: 'Fehler: Karte konnte nicht aus Anki gelöscht werden',
            somethingWentWrong: 'Etwas ist schiefgelaufen',
            unknownError: 'Unbekannter Fehler',
            failedToIssueRequest: 'Anfrage konnte nicht gesendet werden',
            unexpectedNumberOfFields: 'Antwort hat eine unerwartete Anzahl von Feldern',
            missingErrorField: 'Antwort fehlt erforderliches Fehlerfeld',
            missingResultField: 'Antwort fehlt erforderliches Ergebnisfeld'
        },
        success: {
            cardsMoved: 'Karten in neuen Stapel verschoben',
            nothingToDo: 'Nichts zu tun. Alles ist auf dem neuesten Stand',
            folderProcessed: 'Ordner verarbeitet. Keine Änderungen erforderlich.',
            noChangesNeeded: 'Keine Änderungen erforderlich'
        },
        stats: {
            filesProcessed: 'Dateien verarbeitet',
            cardsCreated: 'Karten erstellt',
            cardsUpdated: 'Karten aktualisiert',
            cardsDeleted: 'Karten gelöscht',
            cardsSkipped: 'Karten übersprungen',
            cardsError: 'Karten mit Fehlern'
        }
    },
    // Befehle
    commands: {
        generateCurrentFile: 'Für aktuelle Datei generieren',
        generateAllFiles: 'Für alle Dateien im Tresor generieren',
        generateFlashcards: 'Karteikarten generieren'
    },
    // Benutzeroberfläche
    ui: {
        processingProgress: 'Verarbeitungsfortschritt',
        currentFile: 'Aktuelle Datei',
        currentFolder: 'Aktueller Ordner',
        calculating: 'Berechnung...',
        preparing: 'Vorbereitung...',
        folderProcessingResults: 'Ordner-Verarbeitungsergebnisse',
        flashcardsGenerationResults: 'Karteikarten-Generierungsergebnisse',
        processingError: 'Verarbeitungsfehler',
        unknownError: 'Unbekannter Fehler',
        openFileFirst: 'Bitte öffnen Sie zuerst eine Datei, um den zu verarbeitenden Ordner zu bestimmen',
        cannotDetermineFolder: 'Aktueller Ordner kann nicht bestimmt werden',
        processAllFilesPrompt: 'Derzeit ist keine Datei geöffnet. Möchten Sie alle Dateien im Tresor verarbeiten?',
        confirmation: 'Bestätigung',
        yes: 'Ja',
        no: 'Nein',
        noResultsToDisplay: 'Keine Ergebnisse anzuzeigen.',
        close: 'Schließen'
    },
    notifications: {
        insertedSuccessfully: 'Erfolgreich eingefügt',
        updatedSuccessfully: 'Erfolgreich aktualisiert',
        deletedSuccessfully: 'Erfolgreich gelöscht',
        error: 'Fehler',
        nothingToDo: 'Nichts zu tun',
        unknownError: 'Unbekannter Fehler',
        cards: 'Karten',
        allFilesProcessedNoChanges: 'Alle Dateien verarbeitet. Keine Änderungen erforderlich.',
        processingComplete: 'Verarbeitung abgeschlossen: {{processed}} Dateien verarbeitet, {{created}} Karten erstellt, {{updated}} Karten aktualisiert, {{deleted}} Karten gelöscht, {{skipped}} Dateien übersprungen, {{errors}} Fehler',
        cardNotInAnki: 'Karte mit ID {{id}} ist nicht in Anki!',
        cardsMovedToDeck: 'Karten in neues Deck verschoben',
        everythingUpToDate: 'Alles ist auf dem neuesten Stand',
        couldNotUploadMedia: 'Medien konnten nicht hochgeladen werden',
        couldNotReadMedia: 'Medien konnten nicht gelesen werden',
        couldNotWriteCards: 'Karten konnten nicht in Anki geschrieben werden',
        couldNotUpdateCards: 'Karten konnten nicht in Anki aktualisiert werden',
        couldNotDeleteCard: 'Karte konnte nicht aus Anki gelöscht werden',
        couldNotUpdateDeck: 'Deck konnte nicht aktualisiert werden',
        couldNotUpdateFile: 'Datei konnte nicht aktualisiert werden',
        ankiConnectNotRunning: 'Anki Connect läuft nicht. Bitte stellen Sie sicher, dass Anki geöffnet ist und das AnkiConnect-Plugin installiert ist.',
        ankiConnectTestSuccess: 'Anki Connect Verbindung erfolgreich!',
        ankiConnectTestFailed: 'Anki Connect Verbindung fehlgeschlagen',
        settingsUpdated: 'Einstellungen aktualisiert',
        languageChanged: 'Sprache geändert'
    },
    anki: {
        models: {
            frontBack: 'Vorderseite / Rückseite',
            backFront: 'Rückseite / Vorderseite',
            cloze: 'Lückentext',
            spaced: 'Abstand'
        },
        fields: {
            front: 'Vorderseite',
            back: 'Rückseite',
            prompt: 'Eingabeaufforderung',
            text: 'Text',
            extra: 'Extra',
            source: 'Quelle'
        }
    }
};

// 多语言管理器
/**
 * 多语言管理器类
 * 提供语言切换、翻译文本获取等功能
 */
var I18nManager = /** @class */ (function () {
    function I18nManager() {
        this.currentLanguage = DEFAULT_LANGUAGE;
        this.changeListeners = [];
        // 初始化翻译资源
        this.translations = {
            zh: zhTranslations,
            en: enTranslations,
            de: deTranslations
        };
        // 从本地存储加载语言设置
        this.loadLanguageFromStorage();
    }
    /**
     * 获取当前语言
     */
    I18nManager.prototype.getCurrentLanguage = function () {
        return this.currentLanguage;
    };
    /**
     * 设置当前语言
     * @param language 要设置的语言
     */
    I18nManager.prototype.setLanguage = function (language) {
        if (this.currentLanguage !== language) {
            this.currentLanguage = language;
            this.saveLanguageToStorage();
            this.notifyLanguageChange();
        }
    };
    /**
     * 获取翻译文本
     * @param key 翻译键路径，支持点号分隔的嵌套路径
     * @param fallback 当翻译不存在时的备用文本
     * @param params 可选的参数对象，用于替换模板中的占位符
     * @returns 翻译后的文本
     */
    I18nManager.prototype.t = function (key, fallback, params) {
        var e_1, _a;
        var keys = key.split('.');
        var value = this.translations[this.currentLanguage];
        var _loop_1 = function (k) {
            var e_2, _b;
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            }
            else {
                // 如果当前语言没有找到翻译，尝试使用英语作为备用
                if (this_1.currentLanguage !== 'en') {
                    var fallbackValue = this_1.translations.en;
                    try {
                        for (var keys_2 = (e_2 = void 0, __values(keys)), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                            var fk = keys_2_1.value;
                            if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
                                fallbackValue = fallbackValue[fk];
                            }
                            else {
                                fallbackValue = undefined;
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (typeof fallbackValue === 'string') {
                        var result_1 = fallbackValue;
                        // 如果提供了参数，替换模板中的占位符
                        if (params) {
                            Object.keys(params).forEach(function (paramKey) {
                                var placeholder = "{{".concat(paramKey, "}}");
                                result_1 = result_1.replace(new RegExp(placeholder, 'g'), String(params[paramKey]));
                            });
                        }
                        return { value: result_1 };
                    }
                }
                return { value: fallback || key };
            }
        };
        var this_1 = this;
        try {
            // 遍历嵌套键路径
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var k = keys_1_1.value;
                var state_1 = _loop_1(k);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var result = typeof value === 'string' ? value : (fallback || key);
        // 如果提供了参数，替换模板中的占位符
        if (params && typeof result === 'string') {
            Object.keys(params).forEach(function (paramKey) {
                var placeholder = "{{".concat(paramKey, "}}");
                result = result.replace(new RegExp(placeholder, 'g'), String(params[paramKey]));
            });
        }
        return result;
    };
    /**
     * 添加语言变更监听器
     * @param listener 监听器函数
     */
    I18nManager.prototype.addLanguageChangeListener = function (listener) {
        this.changeListeners.push(listener);
    };
    /**
     * 移除语言变更监听器
     * @param listener 要移除的监听器函数
     */
    I18nManager.prototype.removeLanguageChangeListener = function (listener) {
        var index = this.changeListeners.indexOf(listener);
        if (index > -1) {
            this.changeListeners.splice(index, 1);
        }
    };
    /**
     * 从本地存储加载语言设置
     */
    I18nManager.prototype.loadLanguageFromStorage = function () {
        try {
            var savedLanguage = localStorage.getItem('ob8anki-language');
            if (savedLanguage && ['zh', 'en', 'de'].includes(savedLanguage)) {
                this.currentLanguage = savedLanguage;
            }
        }
        catch (error) {
            console.warn('Failed to load language from storage:', error);
        }
    };
    /**
     * 保存语言设置到本地存储
     */
    I18nManager.prototype.saveLanguageToStorage = function () {
        try {
            localStorage.setItem('ob8anki-language', this.currentLanguage);
        }
        catch (error) {
            console.warn('Failed to save language to storage:', error);
        }
    };
    /**
     * 通知语言变更
     */
    I18nManager.prototype.notifyLanguageChange = function () {
        var _this = this;
        this.changeListeners.forEach(function (listener) {
            try {
                listener(_this.currentLanguage);
            }
            catch (error) {
                console.error('Error in language change listener:', error);
            }
        });
    };
    return I18nManager;
}());
// 创建全局实例
var i18n = new I18nManager();
// 导出便捷的翻译函数
var t = function (key, fallback, params) { return i18n.t(key, fallback, params); };

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
            xhr.addEventListener("error", function () { return reject(t("processing.errors.failedToIssueRequest")); });
            xhr.addEventListener("load", function () {
                try {
                    var response = JSON.parse(xhr.responseText);
                    if (Object.getOwnPropertyNames(response).length != 2) {
                        throw t("processing.errors.unexpectedNumberOfFields");
                    }
                    if (!Object.prototype.hasOwnProperty.call(response, "error")) {
                        throw t("processing.errors.missingErrorField");
                    }
                    if (!Object.prototype.hasOwnProperty.call(response, "result")) {
                        throw t("processing.errors.missingResultField");
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
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h1", { text: t('settings.title') });
        // 添加语言设置选项
        new obsidian.Setting(containerEl)
            .setName(t('settings.language.name'))
            .setDesc(t('settings.language.desc'))
            .addDropdown(function (dropdown) {
            AVAILABLE_LANGUAGES.forEach(function (lang) {
                // 根据语言代码获取对应的翻译文本
                var displayName;
                switch (lang.code) {
                    case 'zh':
                        displayName = t('settings.language.chinese');
                        break;
                    case 'en':
                        displayName = t('settings.language.english');
                        break;
                    case 'de':
                        displayName = t('settings.language.german');
                        break;
                    default:
                        displayName = lang.name;
                }
                dropdown.addOption(lang.code, displayName);
            });
            dropdown
                .setValue(plugin.settings.language)
                .onChange(function (value) {
                plugin.settings.language = value;
                plugin.saveData(plugin.settings);
                i18n.setLanguage(value);
                // 重新渲染设置界面以应用新语言
                _this.display();
            });
        });
        var description = createFragment();
        description.append(t('settings.ankiConnect.description'), createEl('br'), t('settings.ankiConnect.requirement'));
        new obsidian.Setting(containerEl)
            .setName(t('settings.ankiConnect.givePermission'))
            .setDesc(description)
            .addButton(function (button) {
            button.setButtonText(t('settings.ankiConnect.grantPermission')).onClick(function () {
                new Anki().requestPermission().then(function (result) {
                    if (result.permission === "granted") {
                        plugin.settings.ankiConnectPermission = true;
                        plugin.saveData(plugin.settings);
                        new obsidian.Notice(t('settings.ankiConnect.permissionGranted'));
                    }
                    else {
                        new obsidian.Notice(t('settings.ankiConnect.permissionNotGranted'));
                    }
                }).catch(function (error) {
                    new obsidian.Notice(t('settings.ankiConnect.connectionError'));
                    console.error(error);
                });
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.ankiConnect.testAnki'))
            .setDesc(t('settings.ankiConnect.testDesc'))
            .addButton(function (text) {
            text.setButtonText(t('settings.ankiConnect.test')).onClick(function () {
                new Anki()
                    .ping()
                    .then(function () { return new obsidian.Notice(t('settings.ankiConnect.testSuccess')); })
                    .catch(function () { return new obsidian.Notice(t('settings.ankiConnect.testFailed')); });
            });
        });
        containerEl.createEl("h2", { text: t('settings.general.title') });
        new obsidian.Setting(containerEl)
            .setName(t('settings.general.contextAware.name'))
            .setDesc(t('settings.general.contextAware.desc'))
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.contextAwareMode).onChange(function (value) {
                plugin.settings.contextAwareMode = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.general.sourceSupport.name'))
            .setDesc(t('settings.general.sourceSupport.desc'))
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.sourceSupport).onChange(function (value) {
                plugin.settings.sourceSupport = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.general.inlineID.name'))
            .setDesc(t('settings.general.inlineID.desc'))
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.inlineID).onChange(function (value) {
                plugin.settings.inlineID = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.general.folderBasedDeck.name'))
            .setDesc(t('settings.general.folderBasedDeck.desc'))
            .addToggle(function (toggle) {
            return toggle.setValue(plugin.settings.folderBasedDeck).onChange(function (value) {
                plugin.settings.folderBasedDeck = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.general.defaultDeck.name'))
            .setDesc(t('settings.general.defaultDeck.desc'))
            .addText(function (text) {
            text
                .setValue(plugin.settings.deck)
                .setPlaceholder(t('settings.general.defaultDeck.placeholder'))
                .onChange(function (value) {
                if (value.length) {
                    plugin.settings.deck = value;
                    plugin.saveData(plugin.settings);
                }
                else {
                    new obsidian.Notice(t('settings.general.defaultDeck.error'));
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.general.defaultAnkiTag.name'))
            .setDesc(t('settings.general.defaultAnkiTag.desc'))
            .addText(function (text) {
            text
                .setValue(plugin.settings.defaultAnkiTag)
                .setPlaceholder(t('settings.general.defaultAnkiTag.placeholder'))
                .onChange(function (value) {
                if (!value)
                    new obsidian.Notice(t('settings.general.defaultAnkiTag.noTagNotice'));
                plugin.settings.defaultAnkiTag = value.toLowerCase();
                plugin.saveData(plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: t('settings.cardIdentification.title') });
        new obsidian.Setting(containerEl)
            .setName(t('settings.cardIdentification.flashcardsTag.name'))
            .setDesc(t('settings.cardIdentification.flashcardsTag.desc'))
            .addText(function (text) {
            text
                .setValue(plugin.settings.flashcardsTag)
                .setPlaceholder(t('settings.cardIdentification.flashcardsTag.placeholder'))
                .onChange(function (value) {
                if (value) {
                    plugin.settings.flashcardsTag = value.toLowerCase();
                    plugin.saveData(plugin.settings);
                }
                else {
                    new obsidian.Notice(t('settings.cardIdentification.flashcardsTag.error'));
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.cardIdentification.inlineSeparator.name'))
            .setDesc(t('settings.cardIdentification.inlineSeparator.desc'))
            .addText(function (text) {
            text
                .setValue(plugin.settings.inlineSeparator)
                .setPlaceholder("::")
                .onChange(function (value) {
                // if the value is empty or is the same like the inlineseparatorreverse then set it to the default, otherwise save it
                if (value.trim().length === 0 || value === plugin.settings.inlineSeparatorReverse) {
                    plugin.settings.inlineSeparator = "::";
                    if (value.trim().length === 0) {
                        new obsidian.Notice(t('settings.cardIdentification.inlineSeparator.lengthError'));
                    }
                    else if (value === plugin.settings.inlineSeparatorReverse) {
                        new obsidian.Notice(t('settings.cardIdentification.inlineSeparator.duplicateError'));
                    }
                }
                else {
                    plugin.settings.inlineSeparator = escapeRegExp(value.trim());
                    new obsidian.Notice(t('settings.cardIdentification.inlineSeparator.changed'));
                }
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName(t('settings.cardIdentification.inlineReverseSeparator.name'))
            .setDesc(t('settings.cardIdentification.inlineReverseSeparator.desc'))
            .addText(function (text) {
            text
                .setValue(plugin.settings.inlineSeparatorReverse)
                .setPlaceholder(":::")
                .onChange(function (value) {
                // if the value is empty or is the same like the inlineseparatorreverse then set it to the default, otherwise save it
                if (value.trim().length === 0 || value === plugin.settings.inlineSeparator) {
                    plugin.settings.inlineSeparatorReverse = ":::";
                    if (value.trim().length === 0) {
                        new obsidian.Notice(t('settings.cardIdentification.inlineReverseSeparator.lengthError'));
                    }
                    else if (value === plugin.settings.inlineSeparator) {
                        new obsidian.Notice(t('settings.cardIdentification.inlineReverseSeparator.duplicateError'));
                    }
                }
                else {
                    plugin.settings.inlineSeparatorReverse = escapeRegExp(value.trim());
                    new obsidian.Notice(t('settings.cardIdentification.inlineReverseSeparator.changed'));
                }
                plugin.saveData(plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: t('settings.ribbonIcon.title') });
        new obsidian.Setting(containerEl)
            .setName(t('settings.ribbonIcon.action.name'))
            .setDesc(t('settings.ribbonIcon.action.desc'))
            .addDropdown(function (dropdown) {
            dropdown
                .addOption("single", t('settings.ribbonIcon.action.single'))
                .addOption("folder", t('settings.ribbonIcon.action.folder'))
                .addOption("all", t('settings.ribbonIcon.action.all'))
                .setValue(plugin.settings.ribbonAction || "single")
                .onChange(function (value) {
                plugin.settings.ribbonAction = value;
                plugin.saveData(plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: t('settings.notifications.title') });
        new obsidian.Setting(containerEl)
            .setName(t('settings.notifications.showNoChanges.name'))
            .setDesc(t('settings.notifications.showNoChanges.desc'))
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
                                if (notification.includes(t('notifications.insertedSuccessfully'))) {
                                    stats.created++;
                                }
                                else if (notification.includes(t('notifications.updatedSuccessfully'))) {
                                    stats.updated++;
                                }
                                else if (notification.includes(t('notifications.deletedSuccessfully'))) {
                                    stats.deleted++;
                                }
                                else if (notification.includes(t('notifications.error'))) {
                                    stats.errors++;
                                }
                                else if (notification.includes(t('notifications.nothingToDo'))) {
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
                        allNotifications.unshift("".concat(t('notifications.processingComplete'), " - ") +
                            "".concat(t('processing.stats.filesProcessed'), ": ").concat(stats.processed, ", ").concat(t('processing.stats.cardsCreated'), ": ").concat(stats.created, ", ").concat(t('processing.stats.cardsUpdated'), ": ").concat(stats.updated, ", ") +
                            "".concat(t('processing.stats.cardsDeleted'), ": ").concat(stats.deleted, ", ").concat(t('processing.stats.cardsSkipped'), ": ").concat(stats.skipped, ", ").concat(t('processing.stats.cardsError'), ": ").concat(stats.errors));
                        if (allNotifications.length === 1 && this.settings.showNoChangesNotice) { // Only the summary line
                            allNotifications.push("".concat(t('processing.success.folderProcessed'), ": \"").concat(folderPath, "\""));
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
                        allNotifications.push("[".concat(file.path, "]: ").concat(t('notifications.error'), " - ").concat(err_5.message || t('notifications.unknownError')));
                        stats.errors++;
                        return [3 /*break*/, 10];
                    case 10:
                        i++;
                        return [3 /*break*/, 6];
                    case 11:
                        // Add summary statistics
                        allNotifications.unshift("".concat(t('notifications.processingComplete'), " - ") +
                            "".concat(t('processing.stats.filesProcessed'), ": ").concat(stats.processed, ", ").concat(t('processing.stats.cardsCreated'), ": ").concat(stats.created, ", ").concat(t('processing.stats.cardsUpdated'), ": ").concat(stats.updated, ", ") +
                            "".concat(t('processing.stats.cardsDeleted'), ": ").concat(stats.deleted, ", ").concat(t('processing.stats.cardsSkipped'), ": ").concat(stats.skipped, ", ").concat(t('processing.stats.cardsError'), ": ").concat(stats.errors));
                        if (allNotifications.length === 1 && this.settings.showNoChangesNotice) { // Only the summary line
                            allNotifications.push(t('notifications.allFilesProcessedNoChanges'));
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
                                    this.notifications.push("".concat(t('notifications.error'), ": ").concat(t('notifications.cardNotInAnki'), " (ID: ").concat(card.id, ")"));
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
                                this.notifications.push(t('notifications.cardsMovedToDeck'));
                            }
                            catch (_f) {
                                return [2 /*return*/, [t('notifications.error') + ': ' + t('notifications.couldNotUpdateDeck')]];
                            }
                        }
                        // Update file
                        if (this.updateFile) {
                            try {
                                this.app.vault.modify(activeFile, this.file);
                            }
                            catch (err) {
                                Error(t('notifications.couldNotUpdateFile'));
                                return [2 /*return*/, [t('notifications.error') + ': ' + t('notifications.couldNotUpdateFile')]];
                            }
                        }
                        if (!this.notifications.length && this.settings.showNoChangesNotice) {
                            this.notifications.push(t('notifications.nothingToDo') + '. ' + t('notifications.everythingUpToDate'));
                        }
                        return [2 /*return*/, this.notifications];
                    case 11:
                        err_6 = _e.sent();
                        console.error(err_6);
                        Error(t('notifications.error'));
                        return [2 /*return*/, ["".concat(t('notifications.error'), ": ").concat(err_6.message || t('notifications.unknownError'))]];
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
                        Error(t('notifications.error') + ': ' + t('notifications.couldNotUploadMedia'));
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
                        Error(t('notifications.error') + ': ' + t('notifications.couldNotReadMedia'));
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
                        this.notifications.push(t('notifications.insertedSuccessfully') + " ".concat(insertedCards_1, "/").concat(total_1, " ") + t('notifications.cards'));
                        return [2 /*return*/, insertedCards_1];
                    case 3:
                        err_9 = _a.sent();
                        console.error(err_9);
                        Error(t('notifications.error') + ': ' + t('notifications.couldNotWriteCards'));
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
                        this.notifications.push(t('notifications.updatedSuccessfully') + " ".concat(cards.length, "/").concat(cards.length, " ") + t('notifications.cards'));
                    }
                    catch (err) {
                        console.error(err);
                        Error(t('notifications.error') + ': ' + t('notifications.couldNotUpdateCards'));
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
                                    this.notifications.push(t('notifications.deletedSuccessfully') + " ".concat(deletedCards, "/").concat(cards.length, " ") + t('notifications.cards'));
                                }
                                catch (err) {
                                    console.error(err);
                                    Error(t('notifications.error') + ': ' + t('notifications.couldNotDeleteCard'));
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
                        // 初始化多语言管理器
                        i18n.setLanguage(this.settings.language);
                        this.cardsService = new CardsService(this.app, this.settings);
                        statusBar = this.addStatusBarItem();
                        this.addCommand({
                            id: 'generate-flashcard-current-file',
                            name: t('commands.generateCurrentFile'),
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
                            name: t('commands.generateAllFiles'),
                            callback: function () {
                                _this.generateCardsForAllFiles();
                            }
                        });
                        this.addRibbonIcon('ob8anki', t('commands.generateFlashcards'), function () {
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
                                        new ConfirmationModal(_this.app, t('ui.processAllFilesPrompt'), function () { return _this.generateCardsForAllFiles(); }).open();
                                    }
                                    return;
                                case "single":
                                default:
                                    if (activeFile) {
                                        _this.generateCards(activeFile);
                                    }
                                    else {
                                        new ConfirmationModal(_this.app, t('ui.processAllFilesPrompt'), function () { return _this.generateCardsForAllFiles(); }).open();
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
            showNoChangesNotice: true,
            language: DEFAULT_LANGUAGE // 默认语言设置为中文
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
            new obsidian.Notice(t('ui.openFileFirst'), noticeTimeout);
            return;
        }
        var folderPath = (_a = activeFile.parent) === null || _a === void 0 ? void 0 : _a.path;
        if (!folderPath) {
            new obsidian.Notice(t('ui.cannotDetermineFolder'), noticeTimeout);
            return;
        }
        // Create progress element
        var progressContainer = document.createElement('div');
        progressContainer.className = 'ob8anki-progress';
        progressContainer.innerHTML = "\n\t\t\t<div>".concat(t('ui.processingProgress'), ": <span id=\"ob8anki-current\">0</span>/<span id=\"ob8anki-total\">").concat(t('ui.calculating'), "</span></div>\n\t\t\t<div>").concat(t('ui.currentFile'), ": <span id=\"ob8anki-filename\">").concat(t('ui.preparing'), "</span></div>\n\t\t\t<div>").concat(t('ui.currentFolder'), ": ").concat(folderPath, "</div>\n\t\t\t<div class=\"ob8anki-progress-bar\" style=\"width: 0%\"></div>\n\t\t");
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
            new ResultsModal(_this.app, "".concat(t('ui.folderProcessingResults'), " \"").concat(folderPath, "\""), res).open();
            // Also log results to console
            console.log("Flashcards generation for folder \"".concat(folderPath, "\" completed:"), res);
        }).catch(function (err) {
            // Remove progress element and show error
            document.body.removeChild(progressContainer);
            new obsidian.Notice("".concat(t('ui.processingError'), " \"").concat(folderPath, "\": ").concat(err.message || t('ui.unknownError')), noticeTimeout);
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
        progressContainer.innerHTML = "\n\t\t\t<div>".concat(t('ui.processingProgress'), ": <span id=\"ob8anki-current\">0</span>/<span id=\"ob8anki-total\">").concat(totalFiles, "</span></div>\n\t\t\t<div>").concat(t('ui.currentFile'), ": <span id=\"ob8anki-filename\">").concat(t('ui.preparing'), "</span></div>\n\t\t\t<div class=\"ob8anki-progress-bar\" style=\"width: 0%\"></div>\n\t\t");
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
            new ResultsModal(_this.app, t('ui.flashcardsGenerationResults'), res).open();
            // Also log results to console
            console.log("Flashcards generation for all files completed:", res);
        }).catch(function (err) {
            // Remove progress element and show error
            document.body.removeChild(progressContainer);
            new obsidian.Notice("".concat(t('ui.processingError'), ": ").concat(err.message || t('ui.unknownError')), noticeTimeout);
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
        contentEl.createEl("h2", { text: t('ui.confirmation') });
        contentEl.createEl("p", { text: this.message });
        var buttonContainer = contentEl.createDiv();
        buttonContainer.addClass("ob8anki-modal-buttons");
        var confirmButton = buttonContainer.createEl("button", { text: t('ui.yes') });
        confirmButton.addEventListener("click", function () {
            _this.onConfirm();
            _this.close();
        });
        var cancelButton = buttonContainer.createEl("button", { text: t('ui.no') });
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
            resultsContainer.createEl("p", { text: t('ui.noResultsToDisplay') });
        }
        var buttonContainer = contentEl.createDiv();
        buttonContainer.addClass("ob8anki-modal-buttons");
        var closeButton = buttonContainer.createEl("button", { text: t('ui.close') });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9jb25mL2NvbnN0YW50cy50cyIsInNyYy9pMThuL3R5cGVzLnRzIiwic3JjL2kxOG4vbG9jYWxlcy96aC50cyIsInNyYy9pMThuL2xvY2FsZXMvZW4udHMiLCJzcmMvaTE4bi9sb2NhbGVzL2RlLnRzIiwic3JjL2kxOG4vbWFuYWdlci50cyIsInNyYy9zZXJ2aWNlcy9hbmtpLnRzIiwic3JjL3V0aWxzLnRzIiwic3JjL2d1aS9zZXR0aW5ncy10YWIudHMiLCJub2RlX21vZHVsZXMvc2hvd2Rvd24vZGlzdC9zaG93ZG93bi5qcyIsInNyYy9lbnRpdGllcy9jYXJkLnRzIiwic3JjL2VudGl0aWVzL2ZsYXNoY2FyZC50cyIsInNyYy9lbnRpdGllcy9pbmxpbmVjYXJkLnRzIiwic3JjL2VudGl0aWVzL3NwYWNlZGNhcmQudHMiLCJzcmMvZW50aXRpZXMvY2xvemVjYXJkLnRzIiwic3JjL3NlcnZpY2VzL3BhcnNlci50cyIsInNyYy9jb25mL3JlZ2V4LnRzIiwic3JjL3NlcnZpY2VzL2NhcmRzLnRzIiwibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiU2V0dGluZyIsIk5vdGljZSIsIlBsdWdpblNldHRpbmdUYWIiLCJ0aGlzIiwic2hvd2Rvd24uQ29udmVydGVyIiwicGFyc2VGcm9udE1hdHRlckVudHJ5IiwiRmlsZVN5c3RlbUFkYXB0ZXIiLCJhZGRJY29uIiwiUGx1Z2luIiwiTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQW9GRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDck0sSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hLLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUN0RCxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUUxRTtBQUNBLEVBQUUsSUFBSSxRQUFRLEdBQUcsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUMxRCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbkI7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzVDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQztBQUNqQixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDekUsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQy9ELE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM3RCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDL0QsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBRXpGO0FBQ0EsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDaEQsSUFBSSxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFDN0IsSUFBSSxXQUFXLEdBQUcsWUFBWTtBQUM5QixNQUFNLE9BQU8sTUFBTSxDQUFDO0FBQ3BCLEtBQUssQ0FBQztBQUNOLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxRQUFRLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUN6RCxNQUFNLFFBQVEsR0FBRyxHQUFHO0FBQ3BCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDNUI7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtBQUNmLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDNUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RCxLQUFLO0FBQ0wsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ2xDLE1BQU0sSUFBSSxDQUFDLElBQUk7QUFDZixRQUFRLFdBQVc7QUFDbkIsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQzdFLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNuRSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDakUsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ25FLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUixNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDdkIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzRixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtBQUN2RCxNQUFNLElBQUksQ0FBQyxJQUFJLENB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VUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0M7QUFDQSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUM1QztBQUNBLE1BQU0sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzNDLFFBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELE9BQU87QUFDUCxNQUFNLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUMzQyxRQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvRCxPQUFPO0FBQ1A7QUFDQSxNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkYsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRixRQUFRLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENB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
