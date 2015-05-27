/*
 * IMDb Widget for WordPress
 *
 *     Copyright (C) 2015 Henrique Dias <hacdias@gmail.com>
 *     Copyright (C) 2015 Luís Soares <lsoares@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

jQuery( document ).ready( function ( $ ) {
    $( '.imdb-ratings-charts-link' ).click( function ( ev ) {
        $( ev.currentTarget )
            .parents( '.imdb-widget' )
            .find( '.imdb-widget-charts' )
            .show();
        return false;
    } );
    $( '.imdb-widget-charts-close' ).click( function ( ev ) {
        $( ev.currentTarget ).parents( '.imdb-widget-charts' ).hide();
    } );
} );

