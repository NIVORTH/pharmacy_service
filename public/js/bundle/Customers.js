(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Customers"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Customer"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      ImportProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      email_exist: "",
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      Filter_Name: "",
      Filter_Code: "",
      Filter_Phone: "",
      Filter_Email: "",
      clients: [],
      editmode: false,
      import_clients: "",
      data: new FormData(),
      client: {
        id: "",
        name: "",
        code: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        adresse: "",
        dob: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("Code"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Email"),
        field: "email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Country"),
        field: "country",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("City"),
        field: "city",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("DOB"),
        field: "dob",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  methods: {
    //------------- Submit Validation Create & Edit Customer
    Submit_Customer: function Submit_Customer() {
      var _this = this;
      this.$refs.Create_Customer.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          if (!_this.editmode) {
            _this.Create_Client();
          } else {
            _this.Update_Client();
          }
        }
      });
    },
    //------ update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Clients(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Clients(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this2 = this;
      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this2.selectedIds.push(row.id);
      });
    },
    //------ Event Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Clients(this.serverParams.page);
    },
    //------ Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Clients(this.serverParams.page);
    },
    //------ Event Validation State
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
        validated = _ref4.validated,
        _ref4$valid = _ref4.valid,
        valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_Name = "";
      this.Filter_Code = "";
      this.Filter_Phone = "";
      this.Filter_Email = "";
      this.Get_Clients(this.serverParams.page);
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //--------------------------------- Customers PDF -------------------------------\\
    clients_PDF: function clients_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "Code",
        dataKey: "code"
      }, {
        title: "Name",
        dataKey: "name"
      }, {
        title: "Phone",
        dataKey: "phone"
      }, {
        title: "Email",
        dataKey: "email"
      }, {
        title: "Country",
        dataKey: "country"
      }, {
        title: "City",
        dataKey: "city"
      }];
      pdf.autoTable(columns, self.clients);
      pdf.text("Customer List", 40, 25);
      pdf.save("Customer_List.pdf");
    },
    //--------------------------------- Clients Excel -------------------------------\\
    clients_Excel: function clients_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("clients/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Customers.xlsx");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of theprogress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of theprogress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        }, 500);
      });
    },
    //--------------------------------------- Get All Clients -------------------------------\\
    Get_Clients: function Get_Clients(page) {
      var _this3 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("clients?page=" + page + "&name=" + this.Filter_Name + "&code=" + this.Filter_Code + "&phone=" + this.Filter_Phone + "&email=" + this.Filter_Email + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this3.clients = response.data.clients;
        _this3.totalRows = response.data.totalRows;

        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this3.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    //----------------------------------- Show import Client -------------------------------\\
    Show_import_clients: function Show_import_clients() {
      this.$bvModal.show("importClients");
    },
    //------------------------------ Event Import clients -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      this.import_clients = "";
      var file = e.target.files[0];
      var errorFilesize;
      if (file["size"] < 1048576) {
        // 1 mega = 1,048,576 Bytes
        errorFilesize = false;
      } else {
        this.makeToast("danger", this.$t("file_size_must_be_less_than_1_mega"), this.$t("Failed"));
      }
      if (errorFilesize === false) {
        this.import_clients = file;
      }
    },
    //----------------------------------------Submit  import clients-----------------\\
    Submit_import: function Submit_import() {
      var _this4 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var self = this;
      self.ImportProcessing = true;
      self.data.append("clients", self.import_clients);
      axios.post("clients/import/csv", self.data).then(function (response) {
        self.ImportProcessing = false;
        if (response.data.status === true) {
          _this4.makeToast("success", _this4.$t("Successfully_Imported"), _this4.$t("Success"));
          Fire.$emit("Event_import");
        } else if (response.data.status === false) {
          _this4.makeToast("danger", _this4.$t("field_must_be_in_csv_format"), _this4.$t("Failed"));
        }
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        self.ImportProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this4.makeToast("danger", _this4.$t("Please_follow_the_import_instructions"), _this4.$t("Failed"));
      });
    },
    //----------------------------------- Show Details Client -------------------------------\\
    showDetails: function showDetails(client) {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.client = client;
      Fire.$emit("Get_Details_customers");
    },
    //------------------------------ Show Modal (create Client) -------------------------------\\
    New_Client: function New_Client() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_Customer");
    },
    //------------------------------ Show Modal (Edit Client) -------------------------------\\
    Edit_Client: function Edit_Client(client) {
      this.Get_Clients(this.serverParams.page);
      this.reset_Form();
      this.client = client;
      this.editmode = true;
      this.$bvModal.show("New_Customer");
    },
    //---------------------------------------- Create new Client -------------------------------\\
    Create_Client: function Create_Client() {
      var _this5 = this;
      this.SubmitProcessing = true;
      console.log(this.client);
      axios.post("clients", {
        name: this.client.name,
        email: this.client.email,
        phone: this.client.phone,
        country: this.client.country,
        city: this.client.city,
        adresse: this.client.adresse,
        dob: this.client.dob
      }).then(function (response) {
        Fire.$emit("Event_Customer");
        _this5.makeToast("success", _this5.$t("Create.TitleCustomer"), _this5.$t("Success"));
        _this5.SubmitProcessing = false;
      })["catch"](function (error) {
        // if (error.errors.email.length > 0) {
        //   this.email_exist = error.errors.email[0];
        // }
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
        _this5.SubmitProcessing = false;
      });
    },
    //----------------------------------- Update Client -------------------------------\\
    Update_Client: function Update_Client() {
      var _this6 = this;
      this.SubmitProcessing = true;
      axios.put("clients/" + this.client.id, {
        name: this.client.name,
        email: this.client.email,
        phone: this.client.phone,
        country: this.client.country,
        city: this.client.city,
        adresse: this.client.adresse,
        dob: this.client.dob
      }).then(function (response) {
        Fire.$emit("Event_Customer");
        _this6.makeToast("success", _this6.$t("Update.TitleCustomer"), _this6.$t("Success"));
        _this6.SubmitProcessing = false;
      })["catch"](function (error) {
        _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
        _this6.SubmitProcessing = false;
      });
    },
    //-------------------------------- Reset Form -------------------------------\\
    reset_Form: function reset_Form() {
      this.email_exist = "";
      this.client = {
        id: "",
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        adresse: ""
      };
    },
    //------------------------------- Remove Client -------------------------------\\
    Remove_Client: function Remove_Client(id) {
      var _this7 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("clients/" + id).then(function () {
            _this7.$swal(_this7.$t("Delete.Deleted"), _this7.$t("Delete.CustomerDeleted"), "success");
            Fire.$emit("Delete_Customer");
          })["catch"](function () {
            _this7.$swal(_this7.$t("Delete.Failed"), _this7.$t("Delete.ClientError"), "warning");
          });
        }
      });
    },
    //---- Delete Clients by selection
    delete_by_selected: function delete_by_selected() {
      var _this8 = this;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios.post("clients/delete/by_selection", {
            selectedIds: _this8.selectedIds
          }).then(function () {
            _this8.$swal(_this8.$t("Delete.Deleted"), _this8.$t("Delete.CustomerDeleted"), "success");
            Fire.$emit("Delete_Customer");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);
            _this8.$swal(_this8.$t("Delete.Failed"), _this8.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  // END METHODS

  //----------------------------- Created function-------------------

  created: function created() {
    var _this9 = this;
    this.Get_Clients(1);
    Fire.$on("Get_Details_customers", function () {
      // Complete the animation of theprogress bar.
      setTimeout(function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
      _this9.$bvModal.show("showDetails");
    });
    Fire.$on("Event_Customer", function () {
      setTimeout(function () {
        _this9.Get_Clients(_this9.serverParams.page);
        _this9.$bvModal.hide("New_Customer");
      }, 500);
    });
    Fire.$on("Delete_Customer", function () {
      setTimeout(function () {
        _this9.Get_Clients(_this9.serverParams.page);
      }, 500);
    });
    Fire.$on("Event_import", function () {
      setTimeout(function () {
        _this9.Get_Clients(_this9.serverParams.page);
        _this9.$bvModal.hide("importClients");
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("CustomerManagement"),
      folder: _vm.$t("Customers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.clients,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "select-options": {
        enabled: true,
        clearSelectionText: ""
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "table-hover tableOne vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-sort-change": _vm.onSortChange,
      "on-search": _vm.onSearch,
      "on-selected-rows-change": _vm.selectionChanged
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: "View"
          },
          on: {
            click: function click($event) {
              return _vm.showDetails(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Eye text-25 text-info"
        })]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_edit") ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: "Edit"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Client(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit text-25 text-success"
        })]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_delete") ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: "Delete"
          },
          on: {
            click: function click($event) {
              return _vm.Remove_Client(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window text-25 text-danger"
        })]) : _vm._e()]) : _vm._e()];
      }
    }])
  }, [_c("div", {
    attrs: {
      slot: "selected-row-actions"
    },
    slot: "selected-row-actions"
  }, [_c("button", {
    staticClass: "btn btn-danger btn-sm",
    on: {
      click: function click($event) {
        return _vm.delete_by_selected();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Del")))])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.sidebar-right",
      modifiers: {
        "sidebar-right": true
      }
    }],
    attrs: {
      variant: "outline-info m-1",
      size: "sm"
    }
  }, [_c("i", {
    staticClass: "i-Filter-2"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Filter")) + "\n        ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-success m-1"
    },
    on: {
      click: function click($event) {
        return _vm.clients_PDF();
      }
    }
  }, [_c("i", {
    staticClass: "i-File-Copy"
  }), _vm._v(" PDF\n        ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-danger m-1"
    },
    on: {
      click: function click($event) {
        return _vm.clients_Excel();
      }
    }
  }, [_c("i", {
    staticClass: "i-File-Excel"
  }), _vm._v(" EXCEL\n        ")]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customers_import") ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "info m-1"
    },
    on: {
      click: function click($event) {
        return _vm.Show_import_clients();
      }
    }
  }, [_c("i", {
    staticClass: "i-Download"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Import_Customers")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_add") ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "btn btn-primary btn-icon m-1"
    },
    on: {
      click: function click($event) {
        return _vm.New_Client();
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Add")) + "\n        ")]) : _vm._e()], 1)])], 1), _vm._v(" "), _c("b-sidebar", {
    attrs: {
      id: "sidebar-right",
      title: _vm.$t("Filter"),
      "bg-variant": "white",
      right: "",
      shadow: ""
    }
  }, [_c("div", {
    staticClass: "px-3 py-2"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("CustomerCode")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Code",
      placeholder: _vm.$t("SearchByCode")
    },
    model: {
      value: _vm.Filter_Code,
      callback: function callback($$v) {
        _vm.Filter_Code = $$v;
      },
      expression: "Filter_Code"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("CustomerName")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Name",
      placeholder: _vm.$t("SearchByName")
    },
    model: {
      value: _vm.Filter_Name,
      callback: function callback($$v) {
        _vm.Filter_Name = $$v;
      },
      expression: "Filter_Name"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Phone")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Phone",
      placeholder: _vm.$t("SearchByPhone")
    },
    model: {
      value: _vm.Filter_Phone,
      callback: function callback($$v) {
        _vm.Filter_Phone = $$v;
      },
      expression: "Filter_Phone"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Email")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Email",
      placeholder: _vm.$t("SearchByEmail")
    },
    model: {
      value: _vm.Filter_Email,
      callback: function callback($$v) {
        _vm.Filter_Email = $$v;
      },
      expression: "Filter_Email"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary m-1",
      size: "sm",
      block: ""
    },
    on: {
      click: function click($event) {
        return _vm.Get_Clients(_vm.serverParams.page);
      }
    }
  }, [_c("i", {
    staticClass: "i-Filter-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Filter")) + "\n          ")])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "danger m-1",
      size: "sm",
      block: ""
    },
    on: {
      click: function click($event) {
        return _vm.Reset_Filter();
      }
    }
  }, [_c("i", {
    staticClass: "i-Power-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Reset")) + "\n          ")])], 1)], 1)], 1)]), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Customer"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Customer",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Customer.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Name Customer",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("CustomerName")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "name-feedback",
            label: "name"
          },
          model: {
            value: _vm.client.name,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "name", $$v);
            },
            expression: "client.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "name-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Email customer"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Email")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Email-feedback",
            label: "Email"
          },
          model: {
            value: _vm.client.email,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "email", $$v);
            },
            expression: "client.email"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Email-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))]), _vm._v(" "), _vm.email_exist != "" ? _c("b-alert", {
          staticClass: "error mt-1",
          attrs: {
            show: "",
            variant: "danger"
          }
        }, [_vm._v(_vm._s(_vm.email_exist))]) : _vm._e()], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Phone Customer",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Phone")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Phone-feedback",
            label: "Phone"
          },
          model: {
            value: _vm.client.phone,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "phone", $$v);
            },
            expression: "client.phone"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Phone-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Country customer"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Country")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Country-feedback",
            label: "Country"
          },
          model: {
            value: _vm.client.country,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "country", $$v);
            },
            expression: "client.country"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Country-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "City Customer"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("City")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "City-feedback",
            label: "City"
          },
          model: {
            value: _vm.client.city,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "city", $$v);
            },
            expression: "client.city"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "City-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Adress customer",
      rules: {
        required: false
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Adress")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Adress-feedback",
            label: "Adress"
          },
          model: {
            value: _vm.client.adresse,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "adresse", $$v);
            },
            expression: "client.adresse"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Adress-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "DOB",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("DOB")
          }
        }, [_c("b-form-input", {
          attrs: {
            placeholder: _vm.$t("dob"),
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "rate-feedback",
            label: "dob",
            type: "date"
          },
          model: {
            value: _vm.client.dob,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "dob", $$v);
            },
            expression: "client.dob"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "rate-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_vm._v(_vm._s(_vm.$t("submit")))]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      "ok-only": "",
      size: "md",
      id: "showDetails",
      title: _vm.$t("CustomerDetails")
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mt-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("table", {
    staticClass: "table table-striped table-md"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("CustomerCode")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.code))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("CustomerName")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.name))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Phone")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.phone))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.email))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Country")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.country))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("City")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.city))])]), _vm._v(" "), _c("tr"), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("DOB")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.dob))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Adress")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.client.adresse.substring(0, 24)))])])])])])], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      "ok-only": "",
      "ok-title": "Cancel",
      size: "md",
      id: "importClients",
      title: _vm.$t("Import_Customers")
    }
  }, [_c("b-form", {
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_import.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", [_c("input", {
    attrs: {
      type: "file",
      label: "Choose File"
    },
    on: {
      change: _vm.onFileSelected
    }
  }), _vm._v(" "), _c("b-form-invalid-feedback", {
    staticClass: "d-block",
    attrs: {
      id: "File-feedback"
    }
  }, [_vm._v(_vm._s(_vm.$t("field_must_be_in_csv_format")))])], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-button", {
    attrs: {
      type: "submit",
      variant: "primary",
      disabled: _vm.ImportProcessing,
      size: "sm",
      block: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("submit")))]), _vm._v(" "), _vm.ImportProcessing ? _vm._m(1) : _vm._e()], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-button", {
    attrs: {
      href: "/import/exemples/import_clients.csv",
      variant: "info",
      size: "sm",
      block: ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Download_exemple")))])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("table", {
    staticClass: "table table-bordered table-sm mt-4"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Name")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Phone")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Email")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")) + " | unique")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Country")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("City")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("Adress")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm.$t("DOB")))]), _vm._v(" "), _c("th", [_c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Field_is_required")))])])])])])])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/people/customers.vue":
/*!************************************************************!*\
  !*** ./resources/src/views/app/pages/people/customers.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.vue?vue&type=template&id=06204732& */ "./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&");
/* harmony import */ var _customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/people/customers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./customers.vue?vue&type=template&id=06204732& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/people/customers.vue?vue&type=template&id=06204732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_06204732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);