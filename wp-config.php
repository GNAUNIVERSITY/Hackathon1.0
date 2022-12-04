<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cancer1' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'x0IsjDbKfgQXqbTOaKU;9{I.e;41hg0-#-WAomR0vy_,w?6vzk9qmU&=FWNefO]H' );
define( 'SECURE_AUTH_KEY',  'o`O80%L!!9RNOi#dy~j}ucA6^?.H-IaX,3,8a9XEw(8$Ow~ZEZ%d*0!pYa:q8xrh' );
define( 'LOGGED_IN_KEY',    'Hv-y0N&Gnwj!Lo=URM+Kca!`v3?v-c8TC}OoKo3!U77NLH2v+ RT;=_I5HdXCkJC' );
define( 'NONCE_KEY',        '_4IN$*w4]E_.cc[#v]nqDvMBUu5N1f6WJm&rxZ^BCqz$ZQe=I2l)_[}UIUsX6==n' );
define( 'AUTH_SALT',        ']y**&#%,]<eBe{T,5YBENr2c.}M3DC<Z(@93eoaJx!mOrbuBfFHKwH&fim!2cI8x' );
define( 'SECURE_AUTH_SALT', 'Ma:m:?=A Nk:i)DSBzNoD7[~@W<.PiW,B{6NvcfUdkD%4@qli6r~bYLyw~02(M)=' );
define( 'LOGGED_IN_SALT',   '@:bBFFUQFX-+U4WZk9H^Pn{/WUg)fzS-<$RS1l*Ajk}bwlnqE&c v1Ol~1x-p_Xj' );
define( 'NONCE_SALT',       '#>/TP[Z&3pZuXdNc-4|X6R;5TM-E2iePg}B_u_|=`QFLWK7X& ZIsWsJQ :n:FqX' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
