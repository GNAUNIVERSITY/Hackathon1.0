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
define( 'DB_NAME', 'wordpress' );

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
define( 'AUTH_KEY',         '*MA[LX0CK[gH#`>C>[d:5W!8):xN6{Te4.M6w:GcytZ{Fp.21XDqx,%0u$ ]Q@;q' );
define( 'SECURE_AUTH_KEY',  '8nZGg#F7J4J`lAhf.!)z+w)qE2QDCl7>}Ak8A8yhKPNgPn}:a]`%l!J:1Z=-rt>Q' );
define( 'LOGGED_IN_KEY',    '<F*d<w?B=HS4F-&WRQ`}s!T:FkyCHbE<~e81G{.8)&h%3l=J;~U}+aE)oBn&h[+k' );
define( 'NONCE_KEY',        'uTVUN;3_&PDCAFgI(_lD9a[*&DNzH=r#m5kU{~W$io<x{0(TDMEmgThQl$-mwn%2' );
define( 'AUTH_SALT',        'j^ @i5vR!nA(YD^pWeOvCf3W<ZtNF(daZPi-T?|2p,drS?r`K*]$%oXUHGgJ{Jjy' );
define( 'SECURE_AUTH_SALT', 'tW5)6LC#)^0iZ9-^JhJ^c-UX&G51[%v5f:1uZZ;~r9LA;Vi%{Xk) D0/PD3H`M4R' );
define( 'LOGGED_IN_SALT',   'yEYSj%:g(,YJj2f%PSfQXS(z@if)$j5_9D7R{$!h-xUu3>=s.qw9P<n>6WYV]$:~' );
define( 'NONCE_SALT',       'o=_B2jF/vgMi-q[BagGL9e}Tb.]>vDg@,Rg*.zLs6G<%k8#$04z%vM$8c_>,UvX=' );

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
