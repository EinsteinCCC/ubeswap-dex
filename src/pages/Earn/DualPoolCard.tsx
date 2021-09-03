import { PoolCard } from 'components/earn/PoolCard'
import Loader from 'components/Loader'
import React from 'react'
import { StakingInfo } from 'state/stake/hooks'
import { useMultiStakeRewards } from 'state/stake/useDualStakeRewards'

interface Props {
  poolAddress: string
  underlyingPool: StakingInfo
}

export const DualPoolCard: React.FC<Props> = ({ poolAddress, underlyingPool }: Props) => {
  const mooPool = useMultiStakeRewards(poolAddress, underlyingPool, 2)

  if (!mooPool) {
    return <Loader />
  }

  return <PoolCard stakingInfo={mooPool} />
}
