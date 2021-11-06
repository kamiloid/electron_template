exports.App = new Class(
    {
        Extends: Rapp,
        initialize: function(args)
        {
            this.parent(args, this);
        },
        run: function(props)
        {
        },
        states: function(props)
        {
            this.state('state1', 'andres camilo');
            this.state('state2', 'lopez duque');
        },
        actions: function(props)
        {
            this.action('kupState1', (args)=>
            {
                this.state('state1', args.target.value);
            });
            this.action('kupState2', (args)=>
            {
                this.state('state2', args.target.value);
            });
            this.action('action1', (args)=>
            {
                console.log(args);
            });
        },
        draw: function(props)
        {
            this._dom.iterator.test = `<a href='javascript:;'>item</a>`;

            this._dom.main = (
                `<section>
                    <h1>Hello App</h1>
                    <div id='aaaaaa' class='aaaaa [state:state1]' state='state1'>aaaaa</div>
                    <input type='text' value='[state:state1]' onkeyup='kupState1' />
                    <input type='text' value='[state:state2]' onkeyup='kupState2' />
                    <button onclick='action1'>sdfasdf</button>
                </section>
                <div>rgfrewge [state:state1] [state:state2]</div>`
            );
        }
    }
);