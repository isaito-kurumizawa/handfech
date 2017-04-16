/*
    ImageDisplay
    input�ŃA�b�v���[�h�����摜��\������
    input�^�O�̉��Ɉȉ���ݒ肵�Ă��������B
    <img src="~/Content/img/noimage.png" alt="" class="imgView">
 */

// �摜�\��script
$(function () {
    var setFileInput = $('.imgInput'),
    setFileImg = $('.imgView');

    setFileInput.each(function () {
        var selfFile = $(this),
        selfInput = $(this).find('input[type=file]'),
        prevElm = selfFile.find(setFileImg),
        orgPass = prevElm.attr('src');

        selfInput.change(function () {
            var file = $(this).prop('files')[0],
            fileRdr = new FileReader();

            if (!this.files.length) {
                prevElm.attr('src', orgPass);
                return;
            } else {
                if (!file.type.match('image.*')) {
                    prevElm.attr('src', orgPass);
                    return;
                } else {
                    fileRdr.onload = function () {
                        prevElm.attr('src', fileRdr.result);
                    }
                    fileRdr.readAsDataURL(file);
                }
            }
        });
    });
});