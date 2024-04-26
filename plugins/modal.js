function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('emodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="emodal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">modal-title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `);
    return modal;
}

$.modal = function(options) {
    return {
        open() {},
        close() {},
        destroy() {},
    }
}