function _createModal(options) {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');

    modal.classList.add('emodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="${options.with || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span>
                    ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body">
                    ${options.content || ''}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-close="true">Ok</button>
                    <button type="button" class="btn btn-danger" data-close="true">Cancel</button>
                </div>
            </div>
        </div>
    `);
    document.body.append(modal);
    return modal;
}

$.modal = function(options) {
    const $modal = _createModal(options);
    
    const modalObj = {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
            }, 200);
        },
    }

    $modal.addEventListener('click', event => {
        if(event.target.dataset.close){
            modalObj.close();
        }
    })

    return modalObj;
}