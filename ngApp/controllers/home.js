var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var restoration;
(function (restoration) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController(AuthService, $document) {
                var _this = _super.call(this, AuthService, $document) || this;
                _this.AuthService = AuthService;
                _this.$document = $document;
                return _this;
            }
            return HomeController;
        }(Controllers.BaseController));
        Controllers.HomeController = HomeController;
    })(Controllers = restoration.Controllers || (restoration.Controllers = {}));
})(restoration || (restoration = {}));