namespace restoration.Controllers {

    export class AboutController extends BaseController {
        constructor(public AuthService: restoration.Services.AuthService, public $document) {
            super(AuthService, $document);
        }
    }
}