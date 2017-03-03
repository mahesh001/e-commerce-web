(function() {
    "use strict";

    $registerLang({
        common: {
            locale: 'locale-js',
            weekdays: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            weekdays_short: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            months_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            savenquit: '{value} and quit',
            empty_list: 'No items on list',
            add_more_files : 'Add more files',

            no_data: 'no data',
            save: 'save',
            cancel: 'cancel',
            no: 'no',
            yes: 'yes',
            stop: 'stop',
            close: 'close',
            edit: 'edit',
            retry: 'retry',
            info: 'information',
            warning: 'warning',
            error: 'error',
            question: 'inquiry',
            remove: 'remove',
            hide: 'hide',
            show: 'show',
            change: 'change',
            choose : 'choose',
            ok: 'ok',
            checkbox_yes : 'YES',
            checkbox_no : 'NO',
            view_desktop_version: 'enable desktop view',
            view_rwd_version: 'enable rwd view',
            add: 'add',
            back: 'back',
            to: 'to',
            above: 'above',
            selectAll: 'Select/deselect all',
            cost: 'Cost',
            weight: 'Weight',
            value: 'Value',
            numberOfProducts: 'Number of products',
            requiredField: 'required field',
            ytHint: 'Watch video tutorial on YouTube',

            request: {
                get_error: 'Error while importing data. Try again in a moment',
                commit_error: 'Error while saving changes. Try again in a moment',
                parse_error: 'Error while saving changes. Invalid value',
                readonly_error: 'You do not have write permission. Read-only mode',
                locked_error : 'Error while saving changes. Modified object is locked. Try again in a moment',
                unexpected_error : 'Unexpected error',
                notallowed_error: 'Error while saving changes. You do not have permission',
                notfound_error: 'The object does not exists',
                success: 'The object has been modified',
                cancel: 'Operation canceled by user',
                incorrect: 'Incorrect data in the form'
            }
        },

        taxes: {
            addedTo: 'added to "{countryName}" tax',
            instead: 'instead to "{countryName}" tax',
            compund: 'compounded on top of "{countryName}" tax',
            define: 'define different tax settings for selected state',
            error: 'Invalid value. Value should be between 0 and 99.99'
        },

        filter: {
            show_more_filters : 'Show more filters',
            hide_more_filters : 'Hide filters'
        },

        promo: {
            date_error: 'On Sale starting date can\'t be later then On sale ending date'
        },

        moxie: {
            title: 'File Manager'
        },

        confirmation : {
            remove: 'Are you sure you want to delete the selected items ?',
            remove_file: 'Are you sure you want to delete the file ?',
            invalid_url: 'Error while deleting file'
        },

        calendar: {
            date_all: 'All',
            day_1: 'From yesterday',
            day_7: 'Last 7 days',
            day_30: 'Last 30 days',
            cm: 'Current month',
            pm: 'Past month',
            cq: 'Current quarter',
            pq: 'Past quarter',
            cy: 'Current year',
            py: 'Last year',
            week: '7 days',
            weeks_2: '14 days',
            weeks_3: '3 weeks',
            weeks_4: '4 weeks',
            month: '1 month',
            months_2: '2 months',
            months_3: '3 months',
            months_6: '6 months',
            year: 'year'
        },

        dashboard: {
            update_request_error: 'Error while downloading activities. Try refreshing the page.',
            previous_request_error: 'Error while downloading older activities. Please try again later.',
            new_tag: 'new'
        },

        admin_lock: {
            locked_msg: 'The panel has been locked {time} by {owner}. {message}',
            inactive_msg: 'No action for {time} minutes. For {left} seconds you will be logged out. Close the message to avoid it.'
        },

        selector: {
            select_action: 'Choose an action.'
        },

        category: {
            tree_request_error: 'Error while downloading a tree. Try again in a moment.',
            select_category: 'Pre-select the category by clicking on it.',
            cant_remove_parent: 'A category that has or which subcategory have products cannot be removed.',
            products_on_saved_category: 'Product list can be displayed only for saved category.',
            seo_on_saved_category: 'You can view a SEO section only for saved categories.',
            new_category: 'Add a main category',
            new_subcategory: 'Add a subcategory for "{parent}"',
            edit_category: 'Edit category: {name} (id: {id})',
            no_products_in_category: 'There are no products in this category.',
            presentation_change: 'Are you sure you want to unlink a set of attributes from the category {name}? Unliking will cause deleting the specified attributes.',
            attributes_change: 'You unlinked at last one set of attributes from categories, unlinking will cause deleting attributes from that category.'
        },

        relatedadd: {
            action: 'Action',
            request_error: 'Error while sending data.',
            filter_submit: 'Search',
            number_of_elements: 'Found items: {count}',
            items_per_page: 'Show',
            multicheckbox_count: 'items selected',
            multicheckbox_submit: 'Go',
            multicheckbox_actionadd: 'add selected',
            multicheckbox_actionremove: 'remove selected',
            another_action_in_progress: 'Another action is already been performed.',
            add_success: 'Product has been added to the order',
            add_success_multi: 'Products have been added to the order',
            relate_success: 'The product has been successfully related',
            relate_success_off: 'The product has been successfully unrelated',
            relate_success_multi: 'The products have been successfully related',
            relate_success_multi_off: 'The products have been successfully unrelated'
        },

        layout_editor: {
            boxes: 'Available modules',
            add_box: 'add module',
            add_box_slider: 'add slider',
            header_label: 'Page header',
            footer_label: 'Page footer',
            layout_disabled : 'Layout disabled. Basic layout will be used on this page.',
            confirm_del_box: 'Are you sure you want to remove?',
            modified_exit: 'The changes will not be saved, continue? To save changes first click "Save"',
            column_width: 'Column width',
            column_disabled: 'inactive column',
            column_active : 'active column',
            box_edit : 'Edit',
            box_remove : 'Remove',
            add_boxes_to_enable : 'Add modules to the column to activate it',
            header_title : 'Modules under header',
            middle_left : 'Modules on the left side',
            middle_center_top: 'Modules above main theme',
            middle_right: 'Modules on the right side',
            middle_center_bottom: 'Modules under main theme',
            footer_title : 'Modules above footer'
        },

        codeEditor: {
            fileInfo: 'File informations',
            description: 'Description',
            size: 'Size',
            lastModification: 'Last modification',
            gotoLine: 'Go to line',
            searchPlaceholder: 'type filename or extension',
            menuSwitch: 'switch menu',
            current: 'Current',
            loadedFile: 'File has been loaded',
            restoreFile: 'Restore file',
            confirmClose: 'If you close this file, you will lose unsaved changes. Do you want to continue?'
        },

        shipping: {
            otherRegions: {
                countries: 'other countries',
                regions: 'other regions',
                codes: 'other codes'
            },
            allRegions: {
                countries: 'all countries',
                regions: 'all regions',
                codes: 'all codes'
            },
            inactive: 'Pricelist inactive',
            no_country: 'No country has been selected',
            scope_not_defined: 'Scope quantity/price has not been defined',
            edit: {
                countries: 'edit countries',
                regions: 'edit regions',
                codes: 'edit codes'
            },
            errors: {
                addingInProgressAdd: 'Save or close currently edited pricelist to add a new one',
                addingInProgressEdit: 'Save or close currently edited pricelist to edit another one',
                noFreeParams: 'No more free countries/regions left',
                noList: 'Your shipping zone does not contain any elements. <a href="{url}">Fill in the missing elements</a>.',
                invalidFormat: 'Invalid format'
            },
            pricelistTitle: 'Pricelist range'

        },

        progressbar: {
            eta: 'Estimated completion time',
            request_error: 'Error sending request.',
            spacer : 'element from',
            cancel: 'Operation canceled by user',
            computing: 'counting'
        },

        options: {
            add_option: 'add a feature',
            add_value_text: 'add new item',
            add_value_color: 'add new color',
            empty_input: 'All fields must be filled',
            at_least_two: 'Each feature must include at least two variants',
            type: 'field type',
            type_text: 'text field',
            type_file: 'file upload field',
            type_checkbox: 'checkbox field',
            type_radio: 'radio field',
            type_select: 'select field',
            type_color: 'color palette',
            group_file_change_price: 'when file has been added',
            group_file_desc: 'allows the customer to add a file to the ordered product',
            group_text_change_price: 'when text has been added',
            group_text_desc: 'text field variant allows the customer to enter any text',
            group_checkbox_change_price: 'when checked',
            stock: 'stock handling',
            name: 'Name',
            new_option: 'Add option',
            new_variant: 'Add variant',
            new_variant_gen: 'Generate new variants',
            no_stock: 'no stock handling',
            required: 'required',
            filters: 'display in results',
            price_lower: 'decrease price by',
            price_quo: 'do not change the price',
            price_higher: 'increase price by',
            price_list : 'values',
            price_color_list : 'color list',
            products : 'prod.',
            stocks : 'st.',
            option_msg : 'Are you sure? This operation will delete all variants with stock handling in the products assigned to sets',
            option_remove_msg : 'Are you sure? This operation will delete {stocks} variants in {products} products',
            option_remove_msg_no_stock : 'Are you sure? This operation will delete all the variants in the products',

            vName: 'Option name e.g. Color',
            vValues: 'Option value e.g. Red',
            groupName: 'Variants',
            title: 'Define variants set'
        },

        stocktable: {
            zero_label: 'basic product',
            render_name: '{label}: {value}',
            ean: 'EAN-13: {ean}',
            code: 'Code: {code}',
            remove_confirm: 'Are you sure you want to remove variant "{name}"?',
            remove: 'Are you sure you want to remove variant?',
            multiaction_elements_selected : 'items selected',
            gen_limit : 'You can not generate more than {limit} variants at once. Currently {current} combination are selected.',
            select_at_least_one : 'Choose at least one variant from each group.',
            availability_auto : 'automatic'
        },

        ajaxSuggest: {
            search: 'search ...'
        },

        treeSelect: {
            rootcat: '(main category)',
            error: 'No category found with that name!',
            start_typing: 'Start typing the name of the category'
        },

        fakeSelectNew : {
            multiselect : {
                defaultValue : 'Number of selected',
                toggleCheckAll: 'Select/deselect all'
            }
        },

        colorpicker : {
            select : 'Select color',
            transparent : 'None'
        },

        tinyToggleEditor : {
            turnOffEditor : 'disable editor',
            turnOnEditor : 'enable editor'
        },

        additionalFields : {
            add_option : 'add option',
            remove_option : 'remove option'
        },

        allegro : {
            auction_info  : 'No. %s, orders: %s',
            auction_ended : 'completed',
            prompt_invalid_template_name : 'Invalid template name',
            choose_category: 'choose category'
        },

        prompt : {
            empty_value : 'Value can not be empty'
        },

        xhrsave : {
            file_saved : 'File has been saved',
            parse_error: 'There is a parse error which started on line'
        },

        netart : {
            help : 'help'
        },

        codemirror : {
            search : 'Search',
            ctrlg : 'ctrl+g moves to next search result',
            replace: 'Replace',
            rwith: 'With'
        },

        order : {
            change_status : 'Order status has been modified',
            change_paid : 'Order payment status has been modified',
            change_notes : 'Notes were modified',
            overpaid: 'Overpayment value',
            partpaid: 'Value of a partial fee',
            is_merged: 'Order has been merged'
        },

        datePicker : {
            choose_date : 'Choose date',
            choose_date_range : 'Choose the date range: from {d1} - to {d2}',
            renderer_mouse_wheel: 'Use the mouse wheel to quickly change value',
            show_days: 'show days',
            show_months: 'show months',
            show_years: 'show years'
        },

        invoice : {
            normal:             'Invoice',
            normal_vat:         'VAT invoice',
            proforma:           'Proforma invoice',
            receipt:            'Receipt',
            receipt_fiscal:     'Fiscal receipt',
            income:             'Other income',
            bill:               'Bill',
            unknown:            'Unknown',
            without_tax:        'without tax',
            empty:              'No invoices',
            unknown_taxpayer:   'Please configure taxpayer type, "Configuration &gt; Sales &gt; {link_begin}Invoices{link_end}"',
            wfirma: {
                currency_not_supported: 'Issuing a non-fiscal receipt may be possible only for orders in PLN currency.',
                receipt_fiscal_not_supported: 'Downloading receipt fiscal from administration panel is not supported. Please visit {start_link}https://wfirma.pl{end_link}'
            }
        },

        xhrUpload : {
            only_files : 'Drag the files you want to add here',
            upload_error : 'Upload file error "{filename}"',
            upload_ok : 'File "{filename}" was send',
            filter : 'File "{filename}" is not a valid format'
        },

        parcel: {
            send_success: 'Shipment has been sent'
        },

        chart: {
            week_format: 'Week from %A, %b %e, %Y'
        },

        stock: {
            remove_primary: 'Are you sure you want to delete main product? This will remove all current variants of the product!'
        },

        imgSelect: {
            title: 'Choose image'
        },

        layconf: {
            alert: 'You have got unsaved layout changes. Would You like to save them?'
        },
        
        parcelDocument: {
            noSupportedPrint: 'Shipment method "{name}" does not support print documents',
            differentEngines: 'Parcel has different shipment method'
        },
        
        tags:  {
            addBtn: 'Add tag'
        },
        
        integrations: {
            pocztaPolska: {
                noOffices: 'Selected card has not offices',
                availableInsurances: 'Available insurances'
            },
            apaczka: {
                noPeriod: 'You can not order a courier in a given period'
            }
        },

        multiSearch: {
            cannotAdd: 'You can\'t add empty or already existing item',
            invalidZipCode: 'Enter a valid zip code',
            disabled: 'You have more than {total} elements, editing is possible only with Appstore application or API.'
        },

        appstore: {
            install: 'Install',
            free: 'Installation: free',
            permissionsWarning: 'This applications requires additional permissions to work properly',
            noApps: 'Not found any application in Appstore.',
            noInstallApps: 'You don\'t have any installed applications yet.',
            installPrice: 'Installation price',
            saasPrice: 'Price per {number} month',
            alreadyInstalled: 'You already got this application!',
            saasEnd: 'Subscription fee of "{name}" expired on {days}, to gain access pay your subscription for another settlement period.'
        },

        skinstore: {
            buy: 'Buy theme',
            install: 'Install'
        },

        blog: {
            confirmChangeNamespace: 'Changing the parameter will return 404 page on the previous addresses for all elements of the blog (main page of blog, posts, categories, tags, list of posts by date), except elements with custom SEO url.'
        },

        nestpay: {
            select_bank: 'Select bank to be added',
            username: 'User Name',
            password: 'Password',
            client_id: 'Client ID',
            store_key: 'Store key',
            bank_name: 'Bank name'
        }
    });
}).call(this);