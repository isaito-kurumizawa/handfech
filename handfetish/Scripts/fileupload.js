/**
 * FileUpload
 *
 * �t�@�C��������s��js
 */

/*
    <summary>
    �B����input�^�O�����Ăяo��
    </summary>
    <param name="inputId">�\������input�^�O��id</param>
    <param name="labelName">�t�@�C������ύX����^�O��id</param>
    <returns></returns>
*/
function FileUpload(inputId, labelName) {
    $('#' + inputId).click();
}

/*
    <summary>
    �B����input�^�O�֘A�i�摜�Ainput�^�O�A�t�@�C�����j���N���A����
    </summary>
    <param name="logoImgId">�ύX����img�^�Oid</param>
    <param name="delFlg">�폜�t���O�𗧂Ă�^�Oid</param>
    <param name="input">�N���A����img�^�Oid</param>
    <param name="headerLogoName">�ύX����t�@�C�����̃^�Oid</param>
    <returns></returns>
*/
function DeleteUploadFileName(logoImgId, delFlg, input, labelName) {
    $('#' + delFlg).val("delete");
    $('#' + input).val('');
    $('#' + logoImgId).attr("src", "/Member/Content/img/noimage.png");
    $('#' + labelName).html("");
}