/**
 * FileUpload
 *
 * ファイル操作を行うjs
 */

/*
    <summary>
    隠したinputタグをを呼び出す
    </summary>
    <param name="inputId">表示するinputタグのid</param>
    <param name="labelName">ファイル名を変更するタグのid</param>
    <returns></returns>
*/
function FileUpload(inputId, labelName) {
    $('#' + inputId).click();
}

/*
    <summary>
    隠したinputタグ関連（画像、inputタグ、ファイル名）をクリアする
    </summary>
    <param name="logoImgId">変更するimgタグid</param>
    <param name="delFlg">削除フラグを立てるタグid</param>
    <param name="input">クリアするimgタグid</param>
    <param name="headerLogoName">変更するファイル名のタグid</param>
    <returns></returns>
*/
function DeleteUploadFileName(logoImgId, delFlg, input, labelName) {
    $('#' + delFlg).val("delete");
    $('#' + input).val('');
    $('#' + logoImgId).attr("src", "/Member/Content/img/noimage.png");
    $('#' + labelName).html("");
}