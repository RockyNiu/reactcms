// cabinet component - container for widgets
var Cabinet = React.createClass({
    name: 'cabinet',
    mixins: [getCommonMixin],
    components: {
        ItemDetail: ItemDetail,
        ArticleDetail: ArticleDetail,
        LinksetDetail: LinksetDetail
    },

    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'items', type:'array', required:false, defaultValue:[], note:'items' }
        ];
        return attributes;
    },
    
    render: function() {
        var widgets = [];
        for (var i = 0; i < this.state.items.length; i++) {
            var item = this.state.items[i];
            widgets.push(
                this.components[item.type]({
                    key: item.key,
                    ref: item.name,
                    data: item.data
                })
            );
        }
        return (
            <div className={ this.state.containerClassNames.join(' ') }  onClick={ this.onClick } >
                { widgets }
                <div className="div-clear-both"></div>
            </div>
        );
    }
    
});
