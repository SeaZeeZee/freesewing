import { Aaron, AaronFront, AaronBack } from 'shared/components/designs/linedrawings/aaron.mjs'
import { Albert, AlbertFront } from 'shared/components/designs/linedrawings/albert.mjs'
import { Bruce, BruceFront, BruceBack } from 'shared/components/designs/linedrawings/bruce.mjs'
import { Simon, SimonFront, SimonBack } from 'shared/components/designs/linedrawings/simon.mjs'
import { Wahid, WahidFront, WahidBack } from 'shared/components/designs/linedrawings/wahid.mjs'
import { Bee, BeeFront, BeeBack } from 'shared/components/designs/linedrawings/bee.mjs'
import { Lucy, LucyFront } from 'shared/components/designs/linedrawings/lucy.mjs'

export const lineDrawingsFront = {
  aaron: AaronFront,
  albert: AlbertFront,
  bruce: BruceFront,
  simon: SimonFront,
  wahid: WahidFront,
  bee: BeeFront,
  lucy: LucyFront,
}

export const lineDrawingsBack = {
  aaron: AaronBack,
  bruce: BruceBack,
  simon: SimonBack,
  wahid: WahidBack,
  bee: BeeBack,
}

export const lineDrawings = {
  aaron: Aaron,
  albert: Albert,
  bruce: Bruce,
  simon: Simon,
  wahid: Wahid,
  bee: Bee,
  lucy: Lucy,
}
