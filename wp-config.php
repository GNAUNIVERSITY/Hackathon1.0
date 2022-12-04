<?php
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
define( 'DB_NAME', 'admin' );

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
define( 'AUTH_KEY',         '8RHyuFt11fE=e|sexiV/WoGT;F1 ,b:59mst=WZCNM)[n78I?;, m*SEf`#g`69Y' );
define( 'SECURE_AUTH_KEY',  'Nq+3V?tPsPaJ_dpMqk~453vgzFG{anh7ly|m^%MwVs#Op;Lq!J9k}v+]3(fZ8(D~' );
define( 'LOGGED_IN_KEY',    'gfPDQ`dn#~jvm{lQ.48YKOQaNUk=M`{3-EWGT@F**-ynwoKGNaD3ng8.bkS_1]mZ' );
define( 'NONCE_KEY',        'C$!^Jq!2/&^%<Kj2ZMyi@@ujO1b,IDd`j(LXU-Tg,BRdK}TkNZ+K?666aL_r2$/y' );
define( 'AUTH_SALT',        ':8S!ae!j 7e4D%O*6~C+R9wn$7f<%C74&pa i&-n>WDeyyGNx_*L+vnXVw/7a}!o' );
define( 'SECURE_AUTH_SALT', 'l 1RrO34@oDUx;&tNn6s<!l|3C7_]1Lh~c$#6Q(3fwb.$[kKS&()o!CwTdUOI6U ' );
define( 'LOGGED_IN_SALT',   'usJ741K6Kx4V4nk~%uXFg#Yoy-r=RM<S=)u@&8(&:E)d:z@K:c_@]t;1S+&X$4a9' );
define( 'NONCE_SALT',       '[!rbT6s)75MHx=+qc4HSzZ#s!S7s~a&ogat;zx)}c`^EV:|=tw%O9q[$vX*`/*zV' );

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
