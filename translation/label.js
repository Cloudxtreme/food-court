"use strict";

module.exports = {
    follow_message: {
        ja: `いらっしゃいませ。下のパネルから操作を選択してください。`,
        en: `Welcome to our food court. Please select the menu from the panel below.`
    },
    may_i_have_your_order: {
        ja: `ご注文をおうかがいします。`,
        en: `May I have you order?`
    },
    pls_select_order: {
        ja: `ご注文の品をお選びください。`,
        en: `Please select your order.`
    },
    unit: {
        ja: `個`,
        en: `p`
    },
    yen: {
        ja: `円`,
        en: ` yen`
    },
    anything_else: {
        ja: `他にご注文はございますか？`,
        en: `Anything else?`
    },
    receipt: {
        ja: `領収書`,
        en: `Receipt`
    },
    food_fee: {
        ja: `飲食費`,
        en: `Food/Drink fee`
    },
    total_amount: {
        ja: `合計`,
        en: `Total amount`
    },
    amount: {
        ja: `金額`,
        en: `Amount`
    },
    is_the_order_correct: {
        ja: `ご注文はこちらの内容でよろしいでしょうか？`,
        en: `Here is your order. Is it OK?`
    },
    check: {
        ja: `会計`,
        en: `Check`
    },
    add: {
        ja: `追加`,
        en: `Add`,
    },
    modify: {
        ja: `訂正`,
        en: `Modify`
    },
    no: {
        ja: `いいえ`,
        en: `No`
    },
    yes: {
        ja: `はい`,
        en: `Yes`
    },
    there_is_no_order: {
        ja: `現在承っている注文はないようです。`,
        en: `There is no on going order.`
    },
    do_you_add_order: {
        ja: `注文を追加されますか？`,
        en: `Would you order something?`
    },
    certainly: {
        ja: `承知しました。`,
        en: `Certainly.`
    },
    pls_select_order_to_cancel: {
        ja: `キャンセルする注文を選択してください。`,
        en: `Please select the order to cancel.`
    },
    order_canceled: {
        ja: `今回のご注文をキャンセルいたしました。`,
        en: `Order has been canceled.`
    },
    cancel: {
        ja: `取り消し`,
        en: `Cancel`
    },
    pls_tell_me_quantity_of_the_item: {
        ja: (options) => {
            return `${options.item_label}の数量を教えていただけますか？`
        },
        en: (options) => {
            return `How many ${options.item_label} do you order?`
        }
    },
    the_item_has_been_canceled: {
        ja: (options) => {
            return `${options.item_label}をキャンセルしました。`
        },
        en: (options) => {
            return `${options.item_label} has been canceled.`
        }
    },
    pls_go_to_payment: {
        ja: `ありがとうございます、こちらからお支払いにお進みください。`,
        en: `Thank you. Please go ahead to the payment.`
    },
    let_you_know_when_food_is_ready: {
        ja: `お品物がご準備できましたらLINEでご連絡させていただきます。`,
        en: `I will notify you when your order is ready.`
    },
    pay_x_yen: {
        ja: (options) => {
            return `${options.amount}円を支払う`;
        },
        en: (options) => {
            return `Pay ${String(options.amount)} yen`;
        }
    },
    more_than_x_unit: {
        ja: (options) => {
            return `${String(options.number)}個以上`;
        },
        en: (options) => {
            return `More than ${String}`;
        }
    },
    more_than_x_item: {
        ja: (options) => {
            return `${options.item_label}を${String(options.number)}個以上`
        },
        en: (options) => {
            return `More than ${String(options.number)} ${options.item_label}`
        }
    },
    x_item: {
        ja: (options) => {
            return `${options.item_label}を${String(options.number)}個`
        },
        en: (options) => {
            return `${String(options.number)} ${options.item_label}`
        }
    },
    got_x_item: {
        ja: (options) => {
            return `${options.item_label}を${String(options.number)}個ですね。`
        },
        en: (options) => {
            return `${String(options.number)} ${options.item_label}.`
        }
    }
}
