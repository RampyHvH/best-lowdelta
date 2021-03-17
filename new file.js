var global_print = Global.Print,
    global_print_chat = Global.PrintChat,
    global_print_color = Global.PrintColor,
    global_register_callback = Global.RegisterCallback,
    global_execute_command = Global.ExecuteCommand,
    global_frame_stage = Global.FrameStage,
    global_tickcount = Global.Tickcount,
    global_tickrate = Global.Tickrate,
    global_tick_interval = Global.TickInterval,
    global_curtime = Global.Curtime,
    global_realtime = Global.Realtime,
    global_frametime = Global.Frametime,
    global_latency = Global.Latency,
    global_get_view_angles = Global.GetViewAngles,
    global_set_view_angles = Global.SetViewAngles,
    global_get_map_name = Global.GetMapName,
    global_is_key_pressed = Global.IsKeyPressed,
    global_get_screen_size = Global.GetScreenSize,
    global_get_cursor_position = Global.GetCursorPosition,
    global_play_sound = Global.PlaySound,
    global_play_microphone = Global.PlayMicrophone,
    global_stop_microphone = Global.StopMicrophone,
    global_get_username = Global.GetUsername,
    global_set_clan_tag = Global.SetClanTag,
    globals_tickcount = Globals.Tickcount,
    globals_tickrate = Globals.Tickrate,
    globals_tick_interval = Globals.TickInterval,
    globals_curtime = Globals.Curtime,
    globals_realtime = Globals.Realtime,
    globals_frametime = Globals.Frametime,
    sound_play = Sound.Play,
    sound_play_microphone = Sound.PlayMicrophone,
    sound_stop_microphone = Sound.StopMicrophone,
    cheat_get_username = Cheat.GetUsername,
    cheat_register_callback = cheat_register_callback = new Proxy(Cheat.RegisterCallback, {
        'apply': function (Xrdafysm8y, Xrdafysm8y, Pkz4ghbrnb) {
            switch (Pkz4ghbrnb[0]) {
            case 'paint':
                Cheat.RegisterCallback('Draw', Pkz4ghbrnb[1]);
                break;
            case 'create_move':
                Cheat.RegisterCallback('CreateMove', Pkz4ghbrnb[1]);
                break;
            case 'fsn':
                Cheat.RegisterCallback('FrameStageNotify', Pkz4ghbrnb[1]);
                break;
            default:
                Cheat.RegisterCallback(Pkz4ghbrnb[0], Pkz4ghbrnb[1]);
                break;
            }
        }
    }),
    cheat_override_damage = Cheat.ExecuteCommand,
    cheat_frame_stage = Cheat.FrameStage,
    cheat_print = Cheat.Print,
    cheat_print_chat = Cheat.PrintChat,
    cheat_print_color = Cheat.PrintColor,
    local_latency = Local.Latency,
    local_get_view_angles = Local.GetViewAngles,
    local_set_view_angles = Local.SetViewAngles,
    local_set_clan_tag = Local.SetClanTag,
    local_get_real_yaw = Local.GetRealYaw,
    local_get_fake_yaw = Local.GetFakeYaw,
    local_get_spread = Local.GetSpread,
    local_get_inaccuracy = Local.GetInaccuracy,
    world_get_map_name = World.GetMapName,
    world_get_server_string = World.GetServerString,
    input_get_cursor_position = Input.GetCursorPosition,
    input_is_key_pressed = Input.IsKeyPressed,
    render_string = Render.String,
    render_text_size = Render.TextSize,
    render_line = Render.Line,
    render_rect = Render.Rect,
    render_filled_rect = Render.FilledRect,
    render_gradient_rect = Render.GradientRect,
    render_circle = Render.Circle,
    render_filled_circle = Render.FilledCircle,
    render_polygon = Render.Polygon,
    render_world_to_screen = Render.WorldToScreen,
    render_add_font = Render.AddFont,
    render_find_font = Render.FindFont,
    render_string_custom = Render.StringCustom,
    render_textured_rect = Render.TexturedRect,
    render_add_texture = Render.AddTexture,
    render_text_size_custom = Render.TextSizeCustom,
    render_get_screen_size = Render.GetScreenSize,
    ui_get_value = UI.GetValue,
    ui_set_value = UI.SetValue,
    ui_add_checkbox = UI.AddCheckbox,
    ui_add_slider_int = UI.AddSliderInt,
    ui_add_slider_float = UI.AddSliderFloat,
    ui_add_hotkey = UI.AddHotkey,
    ui_add_label = UI.AddLabel,
    ui_add_dropdown = UI.AddDropdown,
    ui_add_multi_dropdown = UI.AddMultiDropdown,
    ui_add_color_picker = UI.AddColorPicker,
    ui_add_textbox = UI.AddTextbox,
    ui_set_enabled = UI.SetEnabled,
    ui_get_string = UI.GetString,
    ui_get_color = UI.GetColor,
    ui_set_color = UI.SetColor,
    ui_is_hotkey_active = UI.IsHotkeyActive,
    ui_toggle_hotkey = UI.ToggleHotkey,
    ui_is_menu_open = UI.IsMenuOpen,
    convar_get_int = Convar.GetInt,
    convar_set_int = Convar.SetInt,
    convar_get_float = Convar.GetFloat,
    convar_set_float = Convar.SetFloat,
    convar_get_string = Convar.GetString,
    convar_set_string = Convar.SetString,
    event_get_int = Event.GetInt,
    event_get_float = Event.GetFloat,
    event_get_string = Event.GetString,
    entity_get_entities = Entity.GetEntities,
    entity_get_entities_by_class_i_d = Entity.GetEntitiesByClassID,
    entity_get_players = Entity.GetPlayers,
    entity_get_enemies = Entity.GetEnemies,
    entity_get_teammates = Entity.GetTeammates,
    entity_get_local_player = Entity.GetLocalPlayer,
    entity_get_game_rules_proxy = Entity.GetGameRulesProxy,
    entity_get_entity_from_user_i_d = Entity.GetEntityFromUserID,
    entity_is_teammate = Entity.IsTeammate,
    entity_is_enemy = Entity.IsEnemy,
    entity_is_bot = Entity.IsBot,
    entity_is_local_player = Entity.IsLocalPlayer,
    entity_is_valid = Entity.IsValid,
    entity_is_alive = Entity.IsAlive,
    entity_is_dormant = Entity.IsDormant,
    entity_get_class_i_d = Entity.GetClassID,
    entity_get_class_name = Entity.GetClassName,
    entity_get_name = Entity.GetName,
    entity_get_weapon = Entity.GetWeapon,
    entity_get_weapons = Entity.GetWeapons,
    entity_get_render_origin = Entity.GetRenderOrigin,
    entity_get_prop = Entity.GetProp,
    entity_set_prop = Entity.SetProp,
    entity_get_hitbox_position = Entity.GetHitboxPosition,
    entity_get_eye_position = Entity.GetEyePosition,
    trace_line = Trace.Line,
    trace_bullet = Trace.Bullet,
    usercmd_set_movement = UserCMD.SetMovement,
    usercmd_get_movement = UserCMD.GetMovement,
    usercmd_set_angles = UserCMD.SetAngles,
    usercmd_force_jump = UserCMD.ForceJump,
    usercmd_force_crouch = UserCMD.ForceCrouch,
    antiaim_get_override = AntiAim.GetOverride,
    antiaim_set_override = AntiAim.SetOverride,
    antiaim_set_real_offset = AntiAim.SetRealOffset,
    antiaim_set_fake_offset = AntiAim.SetFakeOffset,
    antiaim_set_l_b_y_offset = AntiAim.SetLBYOffset,
    exploit_get_charge = Exploit.GetCharge,
    exploit_recharge = Exploit.Recharge,
    exploit_disable_recharge = Exploit.DisableRecharge,
    exploit_enable_recharge = Exploit.EnableRecharge,
    ragebot_override_hitchance = Ragebot.OverrideHitchance,
    ragebot_override_accuracy_boost = Ragebot.OverrideAccuracyBoost,
    ragebot_override_multipoint_scale = Ragebot.OverrideMultipointScale,
    ragebot_force_safety = Ragebot.ForceSafety;
UI.AddCheckbox('Low Delta enable')
UI.AddHotkey('Low Delta')


function DodgeBruteforce() {
    if (UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Low Delta')) {
        shouldDisableOverride = true
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0)
        AntiAim.SetRealOffset(-21)
        AntiAim.SetLBYOffset(-9)
    }
    if (!UI.IsHotkeyActive('Misc', 'JAVASCRIPT', 'Script items', 'Low Delta') && shouldDisableOverride == true) {
        shouldDisableOverride = false
        AntiAim.SetOverride(0);
    }
}



function CreateMove() {
    if (!UI.GetValue('Misc', 'JAVASCRIPT', 'Script items', 'HvH Essentials')) return;
    if (!Entity.IsValid(Entity.GetLocalPlayer())) return;
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    ForceConditions()
    SetHitchanceInAir()
    ReversedFreestanding()
    SafepointOnLimbs()
    WaitForOnShot()
    OverrideMinimumDamage()
    DodgeBruteforce()
    NoScopeHitchance();
}

function FrameNetUpdateStart() {
    if (UI.GetValue('Misc', 'JAVASCRIPT', 'Instant doubletap')) {
        Exploit.OverrideTolerance(0)
        Exploit.OverrideShift(14)
        shouldDisable = true;
    } else if (shouldDisable == true) {
        Exploit.OverrideTolerance(1), Exploit.OverrideShift(12), shouldDisable = false
    }
}

function ClearData() {
    firedThisTick = []
    storedShotTime = []
    info = [];
}

function Main() {
    for (i = 0; i < 64; i++) {
        info[i] = ''
        safeTargets[i] = false;
    }
    Cheat.RegisterCallback('CreateMove', 'CreateMove')
    Cheat.RegisterCallback('Draw', 'Draw')
    Cheat.RegisterCallback('ragebot_fire', 'RagebotLogs')
    Cheat.RegisterCallback('round_start', 'ClearData')
    Cheat.RegisterCallback('FRAME_NET_UPDATE_START', 'FrameNetUpdateStart');
}
Main();