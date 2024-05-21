
/* ------ Start Global Variables Declaration ------*/
var sampleDataOfStudents = [
    {"id":"1","fullName":"Hoàng Thị Ái Ngọc","emailAddress":"aingoc@codegym.com","phoneNumber":"0988.102.888","homeTown":"Hà Nội","gender":"Nữ"},
    {"id":"2","fullName":"Lê Anh Khoa","emailAddress":"leanhkhoa@codegym.com","phoneNumber":"0912.203.885","homeTown":"Nam Định","gender":"Nam"},
    {"id":"3","fullName":"Đặng Lê Hoàng Danh","emailAddress":"Danglehn@codegym.com","phoneNumber":"0913.993.311","homeTown":"Hải Phòng","gender":"Nam"},
    {"id":"4","fullName":"Lê Trần Nhật Huy","emailAddress":"LeTrannh@codegym.com","phoneNumber":"0904.177.324","homeTown":"Thừa Thiên Huế","gender":"Nam"},
    {"id":"5","fullName":"Trần Trung Kiên","emailAddress":"Trungkien@codegym.com","phoneNumber":"0904.637.858","homeTown":"Hải Phòng","gender":"Nam"},
    {"id":"6","fullName":"Hoàng Văn Lộc","emailAddress":"Hoangvanloc@codegym.com","phoneNumber":"0842.448.799","homeTown":"Bắc Giang","gender":"Nam"},
    {"id":"7","fullName":"Trần Quang Huy","emailAddress":"Tranhuy@codegym.com","phoneNumber":"0983.125.383","homeTown":"Ninh Bình","gender":"Nam"},
    {"id":"8","fullName":"Lê Ngọc Thanh","emailAddress":"Lengocthanh@codegym.com","phoneNumber":"0987.385.999","homeTown":"Hà Nội","gender":"Nam"},
    {"id":"9","fullName":"Hồ Thành Duy","emailAddress":"Hothanhduy90@codegym.com","phoneNumber":"0914.833.632","homeTown":"Hà Nam","gender":"Nam"},
    {"id":"10","fullName":"Phạm Thụy Mẫn Thi","emailAddress":"Phamthi@codegym.com","phoneNumber":"0906.235.827","homeTown":"Thanh Hóa","gender":"Nữ"},
    {"id":"11","fullName":"lê Minh Quang","emailAddress":"Leminhquang@codegym.com","phoneNumber":"0915.323.884","homeTown":"Bắc Ninh","gender":"Nam"},
    {"id":"12","fullName":"Nguyễn Đức Huy","emailAddress":"Nguyenduchuy@codegym.com","phoneNumber":"0839.468.681","homeTown":"Lạng Sơn","gender":"Nam"},
    {"id":"13","fullName":"Nguyễn Hoàng Phương Khanh","emailAddress":"Nguyenkhanh@codegym.com","phoneNumber":"0912.330.918","homeTown":"Thái Bình","gender":"Nữ"},
    {"id":"14","fullName":"Phạm Minh Hiếu","emailAddress":"Phamminhhieu@codegym.com","phoneNumber":"0916.900.918","homeTown":"Hải Dương","gender":"Nam"},
    {"id":"15","fullName":"Lê Minh Huy","emailAddress":"Leminhhuy@codegym.com","phoneNumber":"0842.546.813","homeTown":"Nghệ An","gender":"Nam"},
    {"id":"16","fullName":"Phạm Đình Khiêm","emailAddress":"Phamkhiem@codegym.com","phoneNumber":"0917.469.222","homeTown":"Hà Tĩnh","gender":"Nam"},
    {"id":"17","fullName":"Phạm Thị Mộng Trầm","emailAddress":"Phamtram@codegym.com","phoneNumber":"0983.199.004","homeTown":"Thái Bình","gender":"Nữ"},
    {"id":"18","fullName":"Phạm Minh Quang","emailAddress":"Phamquang@codegym.com","phoneNumber":"0842.547.629","homeTown":"Vĩnh Phúc","gender":"Nam"},
    {"id":"19","fullName":"Nguyễn Công Tuân","emailAddress":"Nguyentuan@codegym.com","phoneNumber":"0904.173.922","homeTown":"Điện Biên","gender":"Nam"},
    {"id":"20","fullName":"Phạm Thị Ngọc","emailAddress":"Ngocpham@codegym.com","phoneNumber":"0914.356.244","homeTown":"Lào Cai","gender":"Nữ"}
];

var btnImportSampleData             = document.getElementById('btnImportSampleData');
var divImportSettingBox             = document.querySelector('div.import-setting-box-container div.import-setting-box');
var litImportThreeNewStudents       = document.getElementById('litImportThreeNewStudents');
var litImportFiveNewStudents        = document.getElementById('litImportFiveNewStudents');
var litImportTenNewStudents         = document.getElementById('litImportTenNewStudents');
var litImportFifteenNewStudents     = document.getElementById('litImportFifteenNewStudents');
var litImportTwentyNewStudents      = document.getElementById('litImportTwentyNewStudents');
/* ------ End Global Variables Declaration ------*/

/* ------ Start Functions Declaration ------*/
btnImportSampleData.onclick         = function() { processImportSettingBox(); }
litImportThreeNewStudents.onclick   = function() { processOnImportSampleData(event, 3); }
litImportFiveNewStudents.onclick    = function() { processOnImportSampleData(event, 5); }
litImportTenNewStudents.onclick     = function() { processOnImportSampleData(event, 10); }
litImportFifteenNewStudents.onclick = function() { processOnImportSampleData(event, 15); }
litImportTwentyNewStudents.onclick  = function() { processOnImportSampleData(event, 20); }

function processImportSettingBox() {
    if (divImportSettingBox.className.toLowerCase().indexOf('hidden') !== -1) {
        showImportSettingBox();

        if (divHelpSettingIcon.className.toLowerCase() === 'focused-menu') {
            hideHelpSettingBox();
        }
    } else {
        hideImportSettingBox();
    }
}

function showImportSettingBox() {
    divImportSettingBox.classList.remove('hidden-import-setting-box-1');
    divImportSettingBox.classList.remove('hidden-import-setting-box-2');
    divImportSettingBox.classList.toggle('visible-import-setting-box');
}

function hideImportSettingBox() {
    divImportSettingBox.classList.remove('visible-import-setting-box');
    divImportSettingBox.classList.toggle('hidden-import-setting-box-1');

    setTimeout(function() {
        divImportSettingBox.classList.toggle('hidden-import-setting-box-2');
        btnImportSampleData.blur();
        resetBgColorOfAllListItems();
    }, 500);
}

function processOnImportSampleData(event, numberOfStudents) {
    try {
        resetBgColorOfAllListItems();
        setBgColorOfFocusedListItem(event);
        importSampleData(numberOfStudents);
    } catch(exception) {
        btnImportSampleData.blur();

        if (typeof(exception.messageForAlertNotification) === 'undefined') {
            handleUndefinedException(false);
        } else {
            sendAlertNotification(`${exception.messageForAlertNotification}`, 8000);
        }
    }
}

function resetBgColorOfAllListItems() {
    let listItems = document.querySelectorAll('div.import-setting-box-container div.import-setting-box ul li');

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].removeAttribute('style');
    }
}

function setBgColorOfFocusedListItem(event) {
    currentActiveElement = event.target;
    let parentElement = currentActiveElement.parentNode;

    if (currentActiveElement.tagName.toUpperCase() === 'LI') {
        currentActiveElement.setAttribute('style', 'background-color: #f0f0f0;');
    } else if (currentActiveElement.tagName.toUpperCase() === 'A' && parentElement.tagName.toUpperCase() === 'LI') {
        parentElement.setAttribute('style', 'background-color: #f0f0f0;');
    }
}

function importSampleData(numberOfStudents) {
    handleExceptionsForPage();

    confirmBeforeChange(
        'Hộp thoại xác nhận Cài đặt',
        `Bạn chắc chắn muốn Tạo danh sách ${setStringForNumberValue(numberOfStudents)} sinh viên ?<br>
        <b>Lưu ý: </b>Trước khi Tạo danh sách mới, chương trình sẽ <b>xóa toàn bộ</b> dữ liệu đang có hiện tại.`,
        currentActiveElement,
        function(isConfirmationOk) {
            if (isConfirmationOk) {
                processDisplayBeforeImport();
                importDataIntoStudentInfoList(numberOfStudents);
                processDisplayAfterImport(numberOfStudents);
            }
        }, 'import-students' //set the current JS File Name that calls confirmBeforeChange() function
    );
}

function processDisplayBeforeImport() {
    hideImportSettingBox();
    resetFilterSearchForm();
    resetStudentForm(false);

    setTimeout(function() {
        showProcessWindow(
            `Bạn vui lòng chờ trong giây lát.<br>
            Chương trình đang cài đặt dữ liệu...`
        );
    }, 800);
}

function importDataIntoStudentInfoList(numberOfStudents) {
    students = [];

    for (let i = 0; i < numberOfStudents; i++) {
        students.unshift(sampleDataOfStudents[i]);
    }

    localStorage.setItem('students', JSON.stringify(students));
    initializeGlobalStudentId();
}

function processDisplayAfterImport(numberOfStudents) {
    let processingTime = getProcessingTime(numberOfStudents);

    setTimeout(function() { hideProcessWindow(); }, processingTime + 600);
    setTimeout(function() { displayStudentInfoList(); }, processingTime + 800);

    setTimeout(function() {
        sendAlertNotification(
            `<font color='#ffff00'>Cài đặt thành công</font> Danh sách <font color='#ffff00'>${setStringForNumberValue(numberOfStudents)}</font> sinh viên mới !`,
            3500, '#104463'
        );
    }, processingTime + 1600);
}

function getProcessingTime(numberOfStudents) {
    if (numberOfStudents > 0 && numberOfStudents <= 3) {
        return 2500;
    } else if (numberOfStudents > 3 && numberOfStudents <= 5) {
        return 3000;
    } else if (numberOfStudents > 5 && numberOfStudents <= 10) {
        return 3500;
    } else if (numberOfStudents > 10 && numberOfStudents <= 15) {
        return 4000;
    } else if (numberOfStudents > 15 && numberOfStudents <= 20) {
        return 4000;
    }

    return null;
}
/* ------ End Functions Declaration ------*/