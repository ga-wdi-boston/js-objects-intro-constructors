batman.usePower()
'Spend money and hit people'
> batman.usePower
[Function: usePower]
> batman.usePower()
'Spend money and hit people'
> const wonderWoman = {
... name: 'Diana Prince',
... alias: 'Wonder Woman',
... usePower: function() {
..... return 'Deflect bullets with bracelets';
..... }
... }
undefined
> wonderWoman
{ name: 'Diana Prince',
  alias: 'Wonder Woman',
  usePower: [Function: usePower] }
> wonderWoman.usePower
[Function: usePower]
> wonderWoman.usePower()
'Deflect bullets with bracelets'
> const Hero = function(name) {
... this.name = name
... }
undefined
> const spiderman = new Hero('Spiderman')
undefined
> spiderman
Hero { name: 'Spiderman' }
> spiderman.name
'Spiderman'
> spiderman.name =
... 'Spidermannnn'
'Spidermannnn'
> spiderman
Hero { name: 'Spidermannnn' }
> spiderman.name =
... spiderman.name
'Spidermannnn'
> spiderman.name
'Spidermannnn'
>

//
const Hero = function(name, alias, power) {
this.name = name
this.alias = alias
this._power = power
this.
